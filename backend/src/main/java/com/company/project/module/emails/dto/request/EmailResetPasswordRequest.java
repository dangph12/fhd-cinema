package com.company.project.module.emails.dto.request;

import jakarta.validation.constraints.NotEmpty;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmailResetPasswordRequest {

//  @NotEmpty(message = "EMPTY_SUBJECT")
//  String subject;

  @NotEmpty(message = "EMPTY_EMAIL")
  String customerEmail;

//  @NotEmpty(message = "EMPTY_TEMPLATE")
//  String template;

}
