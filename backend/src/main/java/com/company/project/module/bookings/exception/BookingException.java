package com.company.project.module.bookings.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingException extends RuntimeException {

  private final String status;
  private final String message;

  public BookingException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}



