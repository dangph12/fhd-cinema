package com.company.project.tickets.exception;

import com.company.project.tickets.common.TicketStatusCode;
import com.company.project.tickets.dto.request.TicketApiResponse;
import com.fasterxml.jackson.databind.JsonMappingException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TicketExceptionHandler {
  
  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<TicketApiResponse<Void>> handlingMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    String enumKey = exception.getFieldError().getDefaultMessage();
    TicketStatusCode statusCode = TicketStatusCode.valueOf(enumKey);

    TicketApiResponse<Void> ticketApiResponse = new TicketApiResponse<>();

    ticketApiResponse.setCode(statusCode.getCode());
    ticketApiResponse.setMessage(statusCode.getMessage());
    
    return ResponseEntity.badRequest().body(ticketApiResponse);
  }

  @ExceptionHandler(value = TicketException.class)
  ResponseEntity<TicketApiResponse<Void>> handlingTicketException(TicketException exception) {
    TicketApiResponse<Void> ticketApiResponse = new TicketApiResponse<>();

    TicketStatusCode code = exception.getTicketStatusCode();

    ticketApiResponse.setCode(code.getCode());
    ticketApiResponse.setMessage(code.getMessage());
    
    return ResponseEntity.badRequest().body(ticketApiResponse);
  }

  @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<TicketApiResponse<Void>> handleHttpMessageNotReadableException(HttpMessageNotReadableException exception) {
        String errorMessage = "Invalid input: Value is out of range for the field.";
        
        Throwable cause = exception.getCause();
        if (cause instanceof JsonMappingException) {
            JsonMappingException jsonMappingException = (JsonMappingException) cause;
            errorMessage = "Invalid input: " + jsonMappingException.getOriginalMessage();
        }
        
        TicketApiResponse<Void> ticketApiResponse = new TicketApiResponse<>();
        ticketApiResponse.setCode(HttpStatus.BAD_REQUEST.value());
        ticketApiResponse.setMessage(errorMessage);

        return new ResponseEntity<>(ticketApiResponse, HttpStatus.BAD_REQUEST);
    }

}
