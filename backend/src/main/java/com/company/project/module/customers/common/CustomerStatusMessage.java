package com.company.project.module.customers.common;

import lombok.Getter;

@Getter
public enum CustomerStatusMessage {

  EMPTY_ID("The id of customer must not be empty"),
  EMPTY_NAME("The name of customer must not be empty"),
  EMPTY_PHONE("The phone number of customer must not be empty"),
  EMPTY_EMAIL("The email of customer must not be empty"),
  EMPTY_ACCOUNT_ID("The accountId of customer must not be empty"),
  EMAIL_INVALID("The email of customer is not valid"),
  PHONE_INVALID("The phone number is not valid"),
  NULL_BOOKED("The isBooked must not be empty"),
  NULL_VOUCHER("The voucher must not be empty"),
  NOT_EXIST("The account's Id does not exist"),
  UNKNOWN_ATTRIBUTE("The attribute does not exist"),
  LESS_THAN_ZERO("The index must not be less than 0"),
  EXIST_NAME("The customer's name have been existed"),
  EXIST_VOUCHER("The customer had this voucher"),
  EXIST_PHONE("The customer's phone have been existed"),
  EXIST_EMAIL("The customer's email have been existed"),
  GET_SUCCESS("Get customer successfully"),
  CREATE_SUCCESS("The customer has been created successfully"),
  DELETE_SUCCESS("The customer deleted successfully"),
  UPDATE_SUCCESS("The customer updated successfully"),
  UPDATE_PASSWORD_SUCCESS("The customer password has been updated successfully"),
  REMOVE_VOUCHER_SUCCESS("The voucher of customer removed successfully");

  private final String message;

  CustomerStatusMessage(String message) {
    this.message = message;
  }

}

