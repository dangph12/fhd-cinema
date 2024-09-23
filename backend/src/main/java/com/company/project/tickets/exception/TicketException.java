package com.company.project.tickets.exception;

import com.company.project.tickets.common.TicketStatusCode;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TicketException extends RuntimeException {

  private TicketStatusCode ticketStatusCode;

  public TicketException(TicketStatusCode ticketStatusCode) {
    super(ticketStatusCode.getMessage());
    this.ticketStatusCode = ticketStatusCode;
  }

}
