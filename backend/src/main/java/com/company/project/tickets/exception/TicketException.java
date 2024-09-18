package com.company.project.tickets.exception;

public class TicketException extends RuntimeException {

  private TicketErrorCode ticketErrorCode;

  public TicketException(TicketErrorCode ticketErrorCode) {
    super(ticketErrorCode.getMessage());
    this.ticketErrorCode = ticketErrorCode;
  }

  public TicketErrorCode getTicketErrorCode() {
      return ticketErrorCode;
  }

  public void setTicketErrorCode(TicketErrorCode ticketErrorCode) {
      this.ticketErrorCode = ticketErrorCode;
  }

}
