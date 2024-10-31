package com.company.project.module.news.exception;

import java.util.Objects;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.news.common.NewsStatusMessage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages = "com.company.project.module.news")
public class NewsExceptionHandler {

  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<ApiResponse<Void>> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    String enumKey = Objects.requireNonNull(exception.getFieldError()).getDefaultMessage();
    NewsStatusMessage newsStatusMessage = NewsStatusMessage.valueOf(enumKey);

    return ResponseEntity.status(HttpStatus.BAD_REQUEST.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.FAIL.getValue())
            .message(newsStatusMessage.getMessage())
            .build());
  }

  @ExceptionHandler(NewsException.class)
  ResponseEntity<ApiResponse<Void>> handleNewsException(NewsException exception) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.ERROR.getValue())
            .message(exception.getMessage())
            .build());
  }

}
