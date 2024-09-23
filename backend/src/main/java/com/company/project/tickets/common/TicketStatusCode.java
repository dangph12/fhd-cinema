package com.company.project.tickets.common;

import lombok.Getter;

@Getter
public enum TicketStatusCode {
  
  DELETE_SUCCESS(204, "the ticket has been deleted successfully"),
  UPDATE_SUCCESS(204, "the ticket has been updated successfully"),
  EMPTY_TICKET(400, "the ticket must not be empty"),
  EMPTY_BOOKING(400, "the booking must not be empty"),
  NOT_EXIST(404, "the ticketId does not exist!"),
  STRING_VALUE(400, "ticket price must be a valid number"),
  NEGATIVE_VALUE(400, "the variable must be greater than 0");

  private final int code;
  private final String message;

  TicketStatusCode(int code, String message) {
    this.code = code;
    this.message = message;
  }
}


