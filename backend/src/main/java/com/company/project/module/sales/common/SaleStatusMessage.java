package com.company.project.module.sales.common;

import lombok.Getter;

@Getter
public enum SaleStatusMessage {

  MOVIE_NOT_EXIST("The movie does not exist"),
  GET_SUCCESS("Get sale successfully");

  private final String message;

  SaleStatusMessage(String message) {
    this.message = message;
  }

}
