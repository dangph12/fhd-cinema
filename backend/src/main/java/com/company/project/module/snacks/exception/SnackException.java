package com.company.project.module.snacks.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SnackException extends RuntimeException {

  private final String status;
  private final String message;

  public SnackException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}
