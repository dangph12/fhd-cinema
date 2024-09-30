package com.company.project.module.customers.common;

import lombok.Getter;

@Getter
public enum CustomerStatusMessage {

  EMPTY_NAME("The name of customer must not be empty"),
  EMPTY_EMAIL("The email of customer must not be empty"),
  NOT_VALID_EMAIL("The email of customer is not valid"),
  NULL_BOOKED("The isBooked must not be empty"),
  NOT_EXIST("The account's Id does not exist"),
  EXIST_ID("The account's Id have been existed"),
  GET_SUCCESS("Get customer successfully"),
  CREATE_SUCCESS("The customer has been created successfully"),
  DELETE_SUCCESS("The customer deleted successfully"),
  UPDATE_SUCCESS("The customer updated successfully");

  private final String message;

  CustomerStatusMessage(String message) {
    this.message = message;
  }

}

