package com.company.project.tickets.dto.request;

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
public class TicketCreationRequest {

    @NotNull(message = "Seat ID cannot be null")
    String seatId;

    @NotNull(message = "Booking ID cannot be null")
    String bookingId;

    @NotNull(message = "Ticket price cannot be null")
    int ticketPrice;  

}
