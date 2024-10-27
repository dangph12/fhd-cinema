package com.company.project.module.tickets.dto.response;

import java.time.LocalDateTime;

import com.company.project.module.seats.entity.Seat;
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
public class TicketDto {
    String ticketId;
    int ticketPrice;
    LocalDateTime ticketCreateAt;
    Seat seat;
}
