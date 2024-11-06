package com.company.project.module.accounts.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.request.AuthenticationRequest;
import com.company.project.module.accounts.dto.request.SignInRequest;
import com.company.project.module.accounts.dto.response.AuthenticationResponse;
import com.company.project.module.accounts.dto.response.SignInResponse;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.exception.AccountException;
import com.company.project.module.accounts.repository.AccountRepository;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.service.BookingService;
import com.company.project.module.customers.dto.response.CustomerDto;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.service.CustomerService;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jose.Payload;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    AccountRepository accountRepository;
    private final CustomerService customerService;
    private final BookingService bookingService;

    @NonFinal
    @Value("${jwt.signerKey}")
    protected String SIGNER_KEY;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var account = accountRepository.findByAccountName(request.getAccountName())
                .orElseThrow(() -> new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage()));

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        boolean authenticated = passwordEncoder.matches(request.getAccountPassword(), account.getAccountPassword());

        if(!authenticated) {
            throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.UNAUTHORIZED.getMessage());
        }

        var token = generateToken(request.getAccountName(), request.isRememberMe());

        return AuthenticationResponse.builder()
                .token(token)
                .authenticated(true)
                .build();

    }

    private String generateToken(String accountName, boolean rememberMe) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet jwtClaimsSet;
        if(!rememberMe) {
            jwtClaimsSet = new JWTClaimsSet.Builder()
                    .subject(accountName)
                    .issuer("test.com")
                    .issueTime(new Date())
                    .expirationTime(new Date(
                            Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                    ))
                    .build();
        } else {
            jwtClaimsSet = new JWTClaimsSet.Builder()
                    .subject(accountName)
                    .issuer("test.com")
                    .issueTime(new Date())
                    .expirationTime(new Date(
                            Instant.now().plus(7, ChronoUnit.DAYS).toEpochMilli()
                    ))
                    .build();
        }

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Cannot create token", e);
            throw new RuntimeException(e);
        }
    }

    public SignInResponse signIn(SignInRequest request) {
        Account account = accountRepository.findByAccountName(request.getAccountName())
                .orElseThrow(() -> new AccountException(
                        Status.FAIL.getValue(),
                        AccountStatusMessage.NOT_EXIST.getMessage()));

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        if (!passwordEncoder.matches(request.getAccountPassword(), account.getAccountPassword())) {
            throw new AccountException(Status.FAIL.getValue(), "Invalid credentials");
        }

        CustomerDto customerDto = customerService.getUserInformationByAccountName(account.getAccountName());
        Customer customer = customerService.convertToCustomer(customerDto);

        List<Booking> booking = bookingService.getAllBookingFromCustomer(customer.getCustomerId());

        // Validate the password


        // Generate and return token
        String token = generateToken(account.getAccountName(), request.isRememberMe());

        return SignInResponse.builder()
                .token(token)
                .customer(customer)
                .booking(booking)
                .build();
    }
}
