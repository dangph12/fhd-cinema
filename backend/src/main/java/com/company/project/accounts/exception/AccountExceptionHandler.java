package com.company.project.accounts.exception;

import com.company.project.accounts.dto.AccountApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AccountExceptionHandler {

    @ExceptionHandler(value = AccountException.class)
    ResponseEntity<AccountApiResponse<Void>> handleAccountException(AccountException exception) {
        return ResponseEntity.status(exception.getCode())
                .body(AccountApiResponse.<Void>builder()
                        .code(exception.getCode())
                        .message(exception.getMessage())
                        .build());
    }
}
