package com.company.project.module.emails.exception;

import java.util.Objects;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.emails.common.EmailStatusMessage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages = "com.company.project.module.emails")
public class EmailExceptionHandler {
  
  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<ApiResponse<Void>> handlingMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    String enumKey = Objects.requireNonNull(exception.getFieldError()).getDefaultMessage();
    EmailStatusMessage emailStatusMessage = EmailStatusMessage.valueOf(enumKey);
    
    return ResponseEntity.status(HttpStatus.BAD_REQUEST.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.FAIL.getValue())
            .message(emailStatusMessage.getMessage())
            .build());
  }

}
