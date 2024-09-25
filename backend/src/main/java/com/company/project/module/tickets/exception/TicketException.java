package com.company.project.module.tickets.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TicketException extends RuntimeException {

  private final int code;
  private final String message;

  public TicketException(int code, String message) {
    super(message);
    this.code = code;
    this.message = message;
  }

}
