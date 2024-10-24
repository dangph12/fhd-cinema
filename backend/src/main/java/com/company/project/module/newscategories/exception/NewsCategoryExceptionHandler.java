package com.company.project.module.newscategories.exception;

import java.util.Objects;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.newscategories.common.NewsCategoryStatusMessage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class NewsCategoryExceptionHandler {
  
  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<ApiResponse<Void>> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    String enumKey = Objects.requireNonNull(exception.getFieldError()).getDefaultMessage();
    NewsCategoryStatusMessage newsCategoryStatusMessage = NewsCategoryStatusMessage.valueOf(enumKey);
    
    return ResponseEntity.status(HttpStatus.BAD_REQUEST.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.FAIL.getValue())
            .message(newsCategoryStatusMessage.getMessage())
            .build());
  }

  @ExceptionHandler(value = NewsCategoryException.class)
  ResponseEntity<ApiResponse<Void>> handleNewsCategoryException(NewsCategoryException exception) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
    .body(ApiResponse.<Void>builder()
      .status(exception.getStatus())
      .message(exception.getMessage())
      .build()); 
  }

}
