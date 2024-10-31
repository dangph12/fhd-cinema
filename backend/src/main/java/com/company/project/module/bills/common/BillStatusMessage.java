package com.company.project.module.bills.common;

import lombok.Getter;

@Getter
public enum BillStatusMessage {

  BOOKING_HAS_BILL("The booking already has bill"),
  EMPTY_AMOUNT("The amount of bill must not be empty"),
  EMPTY_BOOKING("The booking must not be empty"),
  EMPTY_CUSTOMER("The customer must not be empty"),
  EMPTY_SHOWTIME("The showtime must not be empty"),
  EMPTY_SEAT("The seat must not be empty"),
  EMPTY_ISPAID("The paid must not be empty"),
  NEGATIVE_VALUE("The variable must be greater than 0"),
  NOT_EXIST("The bill does not exist"),
  UNKNOWN_ATTRIBUTE("The attribute does not exist"),
  LESS_THAN_ZERO("The index must not be less than 0"),
  EXIST_BOOKING("The booking of bill have been existed"),
  EXIST_VOUCHER("The voucher of bill have been existed"),
  GET_SUCCESS("Get bill successfully"),
  CREATE_SUCCESS("The bill has been created successfully"),
  DELETE_SUCCESS("The bill deleted successfully"),
  INVALID_VOUCHER("Voucher not associated with this Bill"),
  INVALID_SEAT("Seat is not available in the selected screen."),
  DUPLICATE_SEAT("Duplicate seats in request."),
  PAY_SUCCESS("The bill have paid successfully"),
  UPDATE_SUCCESS("The bill updated successfully");

  private final String message;

  BillStatusMessage(String message) {
    this.message = message;
  }

}
