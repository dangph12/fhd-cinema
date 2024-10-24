package com.company.project.module.movies.exception;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice(basePackages = "com.company.project.module.movies")
public class MovieExceptionHandler {

    @ExceptionHandler(value = MovieException.class)
    ResponseEntity<ApiResponse<Void>> movieExceptionHandler(MovieException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.ERROR.getValue())
                        .message(exception.getMessage())
                        .build());
    }

}
