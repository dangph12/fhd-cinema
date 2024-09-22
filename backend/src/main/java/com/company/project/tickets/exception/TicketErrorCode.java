package com.company.project.tickets.exception;

import lombok.Getter;

@Getter
public enum TicketErrorCode {

  DELETE_SUCCESS(201, "The ticket has been deleted successfully"),
  NOT_NULL(401, "The ticket cannot be null"),
  NOT_EXIST(402, "The ticketId does not exist!");

  private final int code;
  private final String message;

  TicketErrorCode(int code, String message) {
    this.code = code;
    this.message = message;
  }

}
