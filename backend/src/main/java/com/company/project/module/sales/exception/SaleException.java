package com.company.project.module.sales.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SaleException extends RuntimeException {

  private final String status;
  private final String message;

  public SaleException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}
