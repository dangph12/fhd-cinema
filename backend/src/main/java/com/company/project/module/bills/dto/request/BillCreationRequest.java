package com.company.project.module.bills.dto.request;

import java.util.List;

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
public class BillCreationRequest {

  @NotEmpty(message = "EMPTY_CUSTOMER")
  String customerId;

  @NotEmpty(message = "EMPTY_SHOWTIME")
  String showtimeId;

  @NotEmpty(message = "EMPTY_SEAT")
  List<String> seatIds;

  List<String> snackIds;

  List<String> voucherIds;
}
