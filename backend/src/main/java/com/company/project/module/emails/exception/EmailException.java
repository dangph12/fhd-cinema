package com.company.project.module.emails.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailException extends RuntimeException {

  private final String status;
  private final String message;

  public EmailException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}
