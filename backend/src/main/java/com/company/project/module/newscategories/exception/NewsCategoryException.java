package com.company.project.module.newscategories.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewsCategoryException extends RuntimeException {

  private final String status;
  private final String message;

  public NewsCategoryException(String status, String message) {
    super(message);
    this.status = status;
    this.message = message;
  }

}
