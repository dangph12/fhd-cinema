package com.company.project.module.seats.dto.request;

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
public class SeatCreationRequest {
  
  @NotEmpty(message = "EMPTY_TYPE")
  String seatTypeId;

  @NotEmpty(message = "EMPTY_SCREEN")
  String screenId;

  @NotEmpty(message = "EMPTY_NAME")
  String seatName;

  @NotNull(message = "NULL_BOOKED")
  boolean isBooked;

}

