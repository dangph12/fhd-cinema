package com.company.project.module.accounts.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.request.AuthenticationRequest;
import com.company.project.module.accounts.dto.request.IntrospectRequest;
import com.company.project.module.accounts.dto.response.AuthenticationResponse;
import com.company.project.module.accounts.dto.response.IntrospectResponse;
import com.company.project.module.accounts.service.AuthenticationService;
import com.nimbusds.jose.JOSEException;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/token")
    ResponseEntity<ApiResponse<AuthenticationResponse>> authenticate(@RequestBody AuthenticationRequest request) {
        var result = authenticationService.authenticate(request);
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<AuthenticationResponse>builder()
                        .data(result)
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.TOKEN_SUCCESS.getMessage())
                        .build());
    }

    @PostMapping("/introspect")
    ResponseEntity<ApiResponse<IntrospectResponse>> introspect(@RequestBody IntrospectRequest request) throws ParseException, JOSEException {
        var result = authenticationService.introspect(request);
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<IntrospectResponse>builder()
                        .data(result)
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.TOKEN_VERIFY_SUCCESS.getMessage())
                        .build());
    }
}