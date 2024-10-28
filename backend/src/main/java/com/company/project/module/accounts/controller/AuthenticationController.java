package com.company.project.module.accounts.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.request.AuthenticationRequest;
import com.company.project.module.accounts.dto.request.SignInRequest;
import com.company.project.module.accounts.dto.response.AuthenticationResponse;
import com.company.project.module.accounts.dto.response.SignInResponse;
import com.company.project.module.accounts.service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;

    @PostMapping("/token")
    ResponseEntity<ApiResponse<AuthenticationResponse>> authenticate(@RequestBody @Valid AuthenticationRequest request) {
        var result = authenticationService.authenticate(request);
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<AuthenticationResponse>builder()
                        .data(result)
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.TOKEN_SUCCESS.getMessage())
                        .build());
    }

    @PostMapping("/sign-in")
    ResponseEntity<ApiResponse<SignInResponse>> signIn(@RequestBody @Valid SignInRequest request) {
        SignInResponse signIn = authenticationService.signIn(request);

        return ResponseEntity.ok()
                .body(ApiResponse.<SignInResponse>builder()
                        .status(Status.SUCCESS.getValue())
                        .message("Sign-in successfully")
                        .data(signIn)
                        .build());
    }
}