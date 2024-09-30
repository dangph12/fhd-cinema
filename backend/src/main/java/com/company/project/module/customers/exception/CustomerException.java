package com.company.project.module.customers.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerException extends RuntimeException {

  private final String status;
  private final String message;

  public CustomerException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}


