package com.company.project.module.tickets.common;

import lombok.Getter;

@Getter
public enum TicketStatusMessage {
  
  DELETE_SUCCESS("The ticket deleted successfully"),
  UPDATE_SUCCESS("The ticket updated successfully"),
  EMPTY_TICKET("The ticket must not be empty"),
  EMPTY_SEAT("The seat must not be empty"),
  EMPTY_BOOKING("The booking must not be empty"),
  NOT_EXIST("The ticket's Id does not exist"),
  STRING_VALUE("The ticket's price must be a valid number"),
  NEGATIVE_VALUE("The variable must be greater than 0"),
  CREATE_SUCCESS("The ticket has been created successfully"),
  GET_SUCCESS("Get all");

  private final String message;

  TicketStatusMessage(String message) {
    this.message = message;
  }

}


