package com.company.project.module.bookings.common;

import lombok.Getter;

@Getter
public enum BookingStatusMessage {

  EMPTY_NAME("The name of booking must not be empty"),
  EMPTY_SHOWTIME("The Showtime Id must not be empty"),
  EMPTY_TICKET("The ticket Id must not be empty"),
  EMPTY_CUSTOMER("The Customer Id must not be empty"),
  NULL_BOOKED("The isBooked must not be empty"),
  NOT_EXIST("The booking does not exist"),
  UNKNOWN_ATTRIBUTE("The attribute does not exist"),
  LESS_THAN_ZERO("The index must not be less than 0"),
  EXIST_ID("The booking's Id have been existed"),
  EXIST_BOOKING("The booking have been existed"),
  CREATE_SUCCESS("The booking has been created successfully"),
  GET_SUCCESS("Get booking successfully"),
  DELETE_SUCCESS("The booking deleted successfully"),
  UPDATE_SUCCESS("The booking updated successfully");

  private final String message;

  BookingStatusMessage(String message) {
    this.message = message;
  }

}


