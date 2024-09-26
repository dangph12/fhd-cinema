package com.company.project.email.common;

import lombok.Getter;

@Getter
public enum EmailStatusMessage {
  
  EMPTY_BODY("The body must not be empty"),
  EMPTY_EMAIL("The email must not be empty"),
  EMPTY_SUBJECT("The subject must not be empty"),
  EMPTY_CUSTOMERNAME("The customer name must not be empty"),
  EMPTY_TEMPLATE("The template must not be empty"),
  EMAIL_INVALID("The email is not valid"),
  EMAIL_SENT_SUCCESSFULLY("Email is sent successfully");

  private final String message;

  EmailStatusMessage(String message) {
    this.message = message;
  }

}

