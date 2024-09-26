package com.company.project.email.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

/**
 * EmailCreationRequest
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmailCreationRequest {

  @Email(message = "EMAIL_INVALID")
  @NotEmpty(message = "EMPTY_EMAIL")
  String email;

  @NotEmpty(message = "EMPTY_SUBJECT")
  String subject;

  @NotEmpty(message = "EMPTY_BODY")
  String body;

  @NotEmpty(message = "EMPTY_CUSTOMERNAME")
  String customerName;

  @NotEmpty(message = "EMPTY_TEMPLATE")
  String template;

}
