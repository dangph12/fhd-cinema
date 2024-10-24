package com.company.project.module.seats.dto.response;

import com.company.project.module.screens.entity.Screen;
import com.company.project.module.seatstypes.entity.SeatType;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SeatDto {
    String seatId;
    String seatName;
    int price;
    SeatType seatType;
    Screen screen;
    boolean isBooked;
}
