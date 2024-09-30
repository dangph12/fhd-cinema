package com.company.project.module.bills.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BillException extends RuntimeException {

  private final String status;
  private final String message;

  public BillException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}

