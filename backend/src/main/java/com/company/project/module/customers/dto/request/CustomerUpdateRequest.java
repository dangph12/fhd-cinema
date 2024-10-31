package com.company.project.module.customers.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

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
public class CustomerUpdateRequest {

  @NotNull(message = "EMPTY_NAME")
  String customerName;

  @NotNull(message = "EMPTY_PHONE")
  @Pattern(regexp = "^(\\+84|0)[1-9]\\d{8}$", message = "PHONE_INVALID")
  String customerPhone;

  @NotNull(message = "EMPTY_EMAIL")
  @Email(message = "EMAIL_INVALID")
  String customerEmail;

}
