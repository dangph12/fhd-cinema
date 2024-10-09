package com.company.project.module.sales.exception;

import com.company.project.common.ApiResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages = "com.company.project.module.sales")
public class SaleExceptionHandler {
  
  @ExceptionHandler(value = SaleException.class)
  ResponseEntity<ApiResponse<Void>> handleSnackException(SaleException exception) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
    .body(ApiResponse.<Void>builder()
      .status(exception.getStatus())
      .message(exception.getMessage())
      .build()); 
  }

}
