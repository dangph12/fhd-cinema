package com.company.project.module.tickets.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TicketException extends RuntimeException {

  private final String status;
  private final String message;

  public TicketException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}
