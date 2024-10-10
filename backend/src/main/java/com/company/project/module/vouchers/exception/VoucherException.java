package com.company.project.module.vouchers.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VoucherException extends RuntimeException {

  private final String status;
  private final String message;

  public VoucherException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}
