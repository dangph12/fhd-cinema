package com.company.project.module.bills.common;

import lombok.Getter;

@Getter
public enum BillStatusMessage {

  BOOKING_HAS_BILL("The booking already has bill"),
  EMPTY_AMOUNT("The amount of bill must not be empty"),
  EMPTY_BOOKING("The booking must not be empty"),
  EMPTY_ISPAID("The paid must not be empty"),
  NEGATIVE_VALUE("The variable must be greater than 0"),
  NOT_EXIST("The bill does not exist"),
  UNKNOWN_ATTRIBUTE("The attribute does not exist"),
  LESS_THAN_ZERO("The index must not be less than 0"),
  EXIST_BOOKING("The booking of bill have been existed"),
  GET_SUCCESS("Get bill successfully"),
  CREATE_SUCCESS("The bill has been created successfully"),
  DELETE_SUCCESS("The bill deleted successfully"),
  UPDATE_SUCCESS("The bill updated successfully");

  private final String message;

  BillStatusMessage(String message) {
    this.message = message;
  }

}
