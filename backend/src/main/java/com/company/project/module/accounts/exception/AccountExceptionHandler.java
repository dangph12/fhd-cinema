package com.company.project.module.accounts.exception;

import com.company.project.common.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AccountExceptionHandler {

    @ExceptionHandler(value = AccountException.class)
    ResponseEntity<ApiResponse<Void>> handleAccountException(AccountException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.ERROR.getValue())
                        .message(exception.getMessage())
                        .build());
    }
}
