package com.company.project.module.movies.exception;


import com.company.project.module.movies.dto.request.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MovieExceptionHandler {

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<ApiResponse> methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException exception) {

        ApiResponse apiResponse = new ApiResponse();

        apiResponse.setMessage(exception.getFieldError().getDefaultMessage());

        return ResponseEntity.badRequest().body(apiResponse);

    }

    @ExceptionHandler(value = MovieException.class)
    ResponseEntity<ApiResponse> movieExceptionHandler(MovieException exception) {

        ApiResponse apiResponse = new ApiResponse();

        ErrorCode errorCode = exception.getErrorCode();

        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);

    }

}
