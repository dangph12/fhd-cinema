package com.company.project.module.seatstypes.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeatTypeException extends RuntimeException {

  private final String status;
  private final String message;

  public SeatTypeException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}
