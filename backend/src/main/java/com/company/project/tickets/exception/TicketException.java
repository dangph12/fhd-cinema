package com.company.project.tickets.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TicketException extends RuntimeException {

  private TicketErrorCode ticketErrorCode;

  public TicketException(TicketErrorCode ticketErrorCode) {
    super(ticketErrorCode.getMessage());
    this.ticketErrorCode = ticketErrorCode;
  }

}
