package com.company.project.tickets.exception;

import com.company.project.tickets.dto.request.TicketApiResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class TicketExceptionHandler {
  
  @ExceptionHandler(value = MethodArgumentNotValidException.class)
  ResponseEntity<TicketApiResponse> handlingMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
    TicketApiResponse ticketApiResponse = new TicketApiResponse();

    ticketApiResponse.setMessage(exception.getFieldError().getDefaultMessage());
    
    return ResponseEntity.badRequest().body(ticketApiResponse);
  }

  @ExceptionHandler(value = TicketException.class)
  ResponseEntity<TicketApiResponse> handlingTicketException(TicketException exception) {
    TicketApiResponse ticketApiResponse = new TicketApiResponse();

    TicketErrorCode code = exception.getTicketErrorCode();

    ticketApiResponse.setCode(code.getCode());
    ticketApiResponse.setMessage(code.getMessage());
    
    return ResponseEntity.badRequest().body(ticketApiResponse);
  }

}
