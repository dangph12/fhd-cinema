package com.company.project.module.seats.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeatException extends RuntimeException {

  private final String status;
  private final String message;

  public SeatException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}

