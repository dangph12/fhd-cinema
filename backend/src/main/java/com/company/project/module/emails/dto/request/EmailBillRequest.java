package com.company.project.module.emails.dto.request;

import jakarta.validation.constraints.NotEmpty;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmailBillRequest {
  @NotEmpty(message = "EMPTY_CUSTOMER")
  String customerId;
  @NotEmpty(message = "EMPTY_BILL")
  String billId;
}
