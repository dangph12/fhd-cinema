package com.company.project.module.bills.dto.request;

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
public class BillCreationRequest {

  @NotEmpty(message = "EMPTY_BOOKING")
  String bookingId;

  @Min(value = 0, message = "NEGATIVE_VALUE")
  int billAmount;  

  @NotNull(message = "EMPTY_ISPAID")
  boolean isPaid;

}
