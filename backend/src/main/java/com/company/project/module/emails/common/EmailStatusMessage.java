package com.company.project.module.emails.common;

import lombok.Getter;

@Getter
public enum EmailStatusMessage {
  
  EMPTY_BILL("The bill's Id must not be empty"),
  EMPTY_CUSTOMER("The customer's Id must not be empty"),
  EMPTY_SUBJECT("The subject must not be empty"),
  EMPTY_TEMPLATE("The template must not be empty"),
  EMAIL_INVALID("The email is not valid"),
  EMAIL_SENT_SUCCESSFULLY("Email is sent successfully");

  private final String message;

  EmailStatusMessage(String message) {
    this.message = message;
  }

}

