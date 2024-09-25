package com.company.project.module.tickets.exception;

import com.company.project.module.tickets.common.TicketStatusMessage;
import com.company.project.module.tickets.dto.request.TicketApiResponse;
import com.fasterxml.jackson.databind.JsonMappingException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Objects;

@ControllerAdvice
public class TicketExceptionHandler {
  
  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<TicketApiResponse<Void>> handlingMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    String enumKey = Objects.requireNonNull(exception.getFieldError()).getDefaultMessage();
    TicketStatusMessage ticketStatusMessage = TicketStatusMessage.valueOf(enumKey);

    TicketApiResponse<Void> ticketApiResponse = TicketApiResponse.<Void>builder()
            .code(HttpStatus.BAD_REQUEST.value())
            .message(ticketStatusMessage.getMessage())
            .build();
    
    return ResponseEntity.badRequest().body(ticketApiResponse);
  }

  @ExceptionHandler(value = TicketException.class)
  ResponseEntity<TicketApiResponse<Void>> handlingTicketException(TicketException exception) {
    
    return ResponseEntity.status(exception.getCode())
            .body(TicketApiResponse.<Void>builder()
                    .code(exception.getCode())
                    .message(exception.getMessage())
                    .build());
  }

  @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<TicketApiResponse<Void>> handleHttpMessageNotReadableException(HttpMessageNotReadableException exception) {
        String errorMessage = "Invalid input: Value is out of range for the field.";
        
        Throwable cause = exception.getCause();
        if (cause instanceof JsonMappingException jsonMappingException) {
            errorMessage = "Invalid input: " + jsonMappingException.getOriginalMessage();
        }
        
        TicketApiResponse<Void> ticketApiResponse = new TicketApiResponse<>();
        ticketApiResponse.setCode(HttpStatus.BAD_REQUEST.value());
        ticketApiResponse.setMessage(errorMessage);

        return new ResponseEntity<>(ticketApiResponse, HttpStatus.BAD_REQUEST);
    }

}
