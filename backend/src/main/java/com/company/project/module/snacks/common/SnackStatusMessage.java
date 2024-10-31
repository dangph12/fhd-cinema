package com.company.project.module.snacks.common;

import lombok.Getter;

@Getter
public enum SnackStatusMessage {

  EMPTY_NAME("The name of snack must not be empty"),
  NEGATIVE_VALUE("The variable must be greater than 0"),
  NOT_EXIST("The snack does not exist"),
  UNKNOWN_ATTRIBUTE("The attribute does not exist"),
  LESS_THAN_ZERO("The index must not be less than 0"),
  EXIST_SNACK("The name of snack have been existed"),
  GET_SUCCESS("Get snack successfully"),
  CREATE_SUCCESS("The snack has been created successfully"),
  DELETE_SUCCESS("The snack deleted successfully"),
  UPDATE_SUCCESS("The snack updated successfully");

  private final String message;

  SnackStatusMessage(String message) {
    this.message = message;
  }

}
