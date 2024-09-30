package com.company.project.module.staffs.exception;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class StaffExceptionHandler {
    @ExceptionHandler(StaffException.class)
    ResponseEntity<ApiResponse<Void>> handleStaffException(StaffException exception) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.ERROR.getValue())
                        .message(exception.getMessage())
                        .build());
    }
}
