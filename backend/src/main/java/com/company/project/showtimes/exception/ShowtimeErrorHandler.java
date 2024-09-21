package com.company.project.showtimes.exception;

import com.company.project.showtimes.dto.request.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ShowtimeErrorHandler {
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    ResponseEntity<ApiResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage(exception.getFieldError().getDefaultMessage());
        return ResponseEntity.badRequest().body(apiResponse);
    }

    @ExceptionHandler(value = ShowtimeException.class)
    ResponseEntity<ApiResponse> showtimeExceptionHandler(ShowtimeException exception) {
        ApiResponse apiResponse = new ApiResponse();

        ErrorCode errorCode = exception.getErrorCode();

        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);
    }
}
