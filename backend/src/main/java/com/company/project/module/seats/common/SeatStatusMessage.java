package com.company.project.module.seats.common;

import lombok.Getter;

@Getter
public enum SeatStatusMessage {

  EMPTY_NAME("The name of seat must not be empty"),
  EMPTY_TYPE("The Type Id must not be empty"),
  EMPTY_SCREEN("The Screen Id must not be empty"),
  EMPTY_BOOKING("The isBooked must not be empty"),
  NOT_EXIST("The seat type's Id does not exist"),
  EXIST_ID("The seat's Id have been existed"),
  EXIST_SEAT("The seat have been existed"),
  CREATE_SUCCESS("The seat has been created successfully"),
  GET_SUCCESS("Get seat successfully"),
  DELETE_SUCCESS("The seat deleted successfully"),
  UPDATE_SUCCESS("The seat updated successfully");

  private final String message;

  SeatStatusMessage(String message) {
    this.message = message;
  }

}
