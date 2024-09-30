package com.company.project.module.seats.dto.request;

import com.company.project.module.screens.entity.Screen;
import com.company.project.module.seatstypes.entity.SeatType;

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
public class SeatDTO {
  
  String seatId;
  SeatType seatType;
  Screen screen;
  String seatName;
  boolean isBooked;

}
