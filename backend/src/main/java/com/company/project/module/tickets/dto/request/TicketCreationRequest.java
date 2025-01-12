package com.company.project.module.tickets.dto.request;

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
public class TicketCreationRequest {

    @NotEmpty(message = "EMPTY_SEAT")
    String seatId;

    @NotEmpty(message = "EMPTY_BOOKING")
    String bookingId;

}
