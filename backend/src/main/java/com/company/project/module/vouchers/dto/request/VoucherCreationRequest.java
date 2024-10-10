package com.company.project.module.vouchers.dto.request;

import java.time.LocalDateTime;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

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
public class VoucherCreationRequest {

  @NotEmpty(message = "EMPTY_CODE")
  String voucherCode;

  @NotEmpty(message = "EMPTY_NAME")
  String voucherName;

  @NotEmpty(message = "EMPTY_DESCRIPTION")
  String voucherDescription;

  @Min(value = 0, message = "NEGATIVE_VALUE")
  int voucherDiscountPercent;  

  @NotNull()
  LocalDateTime voucherStartedAt;

  @NotNull()
  LocalDateTime voucherEndedAt;
}
