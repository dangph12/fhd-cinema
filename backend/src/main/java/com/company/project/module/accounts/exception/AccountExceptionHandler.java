package com.company.project.module.accounts.exception;

import java.util.Objects;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages = "com.company.project.module.accounts")
public class AccountExceptionHandler {

  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<ApiResponse<Void>> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    String enumKey = Objects.requireNonNull(exception.getFieldError()).getDefaultMessage();
    AccountStatusMessage accountStatusMessage = AccountStatusMessage.valueOf(enumKey);

    return ResponseEntity.status(HttpStatus.BAD_REQUEST.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.FAIL.getValue())
            .message(accountStatusMessage.getMessage())
            .build());
  }

  @ExceptionHandler(value = AccountException.class)
  ResponseEntity<ApiResponse<Void>> handleAccountException(AccountException exception) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
        .body(ApiResponse.<Void>builder()
            .status(exception.getStatus())
            .message(exception.getMessage())
            .build());
  }
}
package com.company.project.module.accounts.exception;

import java.util.Objects;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages = "com.company.project.module.accounts")
public class AccountExceptionHandler {

  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<ApiResponse<Void>> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    String enumKey = Objects.requireNonNull(exception.getFieldError()).getDefaultMessage();
    AccountStatusMessage accountStatusMessage = AccountStatusMessage.valueOf(enumKey);

    return ResponseEntity.status(HttpStatus.BAD_REQUEST.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.FAIL.getValue())
            .message(accountStatusMessage.getMessage())
            .build());
  }

  @ExceptionHandler(value = AccountException.class)
  ResponseEntity<ApiResponse<Void>> handleAccountException(AccountException exception) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
        .body(ApiResponse.<Void>builder()
            .status(exception.getStatus())
            .message(exception.getMessage())
            .build());
  }
}
