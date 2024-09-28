package com.company.project.module.seats.dto.request;

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
public class SeatCreationRequest {
  
  @NotEmpty(message = "EMPTY_TYPE")
  String typeId;

  @NotEmpty(message = "EMPTY_TYPE")
  String screenId;

  @NotEmpty(message = "EMPTY_SCREEN")
  String seatName;

  @NotEmpty(message = "EMPTY_BOOKING")
  boolean isBooked;

}

