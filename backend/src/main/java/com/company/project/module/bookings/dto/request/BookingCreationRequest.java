package com.company.project.module.bookings.dto.request;

import jakarta.validation.constraints.Min;
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
public class BookingCreationRequest {
  
  @NotEmpty(message = "EMPTY_SHOWTIME")
  String showtimeId;

  @NotEmpty(message = "EMPTY_CUSTOMER")
  String customerId;

  @Min(value = 0, message = "NEGATIVE_VALUE")
  int bookingPrice;

}



