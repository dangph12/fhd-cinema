package com.company.project.module.sales.common;

import lombok.Getter;

@Getter
public enum SaleStatusMessage {

  MOVIE_NOT_EXIST("The movie does not exist"),
  UNKNOWN_ATTRIBUTE("The attribute does not exist"),
  LESS_THAN_ZERO("The index must not be less than 0"),
  GET_SALE_SUCCESS("Successfully retrieved movie sales data."),
  GET_SUCCESS("Get sale successfully");

  private final String message;

  SaleStatusMessage(String message) {
    this.message = message;
  }

}
