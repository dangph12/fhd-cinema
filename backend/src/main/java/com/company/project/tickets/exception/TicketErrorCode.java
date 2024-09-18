package com.company.project.tickets.exception;

public enum TicketErrorCode {

  DELETE_SUCCESS(201, "The Ticket have been removed"),
  NOT_NULL(401, "This field can not be null!"),
  NOT_EXIST(402, "The ticketId does not exist!");

  private int code;
  private String message;

  TicketErrorCode(int code, String message) {
    this.code = code;
    this.message = message;
  }
  
  public int getCode() {
      return code;
  }
  
  public String getMessage() {
      return message;
  }

}
