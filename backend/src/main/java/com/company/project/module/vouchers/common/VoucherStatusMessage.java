package com.company.project.module.vouchers.common;

import lombok.Getter;

@Getter
public enum VoucherStatusMessage {

  EMPTY_NAME("The name of voucher must not be empty"),
  EMPTY_CODE("The code of voucher must not be empty"),
  EMPTY_DESCCRIPTION("The description of voucher must not be empty"),
  NEGATIVE_VALUE("The variable must be greater than 0"),
  NOT_EXIST("The voucher does not exist"),
  UNKNOWN_ATTRIBUTE("The attribute does not exist"),
  LESS_THAN_ZERO("The index must not be less than 0"),
  EXIST_NAME("The name of voucher have been existed"),
  EXIST_CODE("The code of voucher have been existed"),
  GET_SUCCESS("Get voucher successfully"),
  CREATE_SUCCESS("The voucher has been created successfully"),
  DELETE_SUCCESS("The voucher deleted successfully"),
  UPDATE_SUCCESS("The voucher updated successfully");

  private final String message;

  VoucherStatusMessage(String message) {
    this.message = message;
  }

}
