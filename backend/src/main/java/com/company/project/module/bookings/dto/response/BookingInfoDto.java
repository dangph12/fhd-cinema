package com.company.project.module.bookings.dto.response;

import java.time.LocalDateTime;
import java.util.List;

import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;
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
public class BookingInfoDto {
    String bookingId;
    String customerName;
    String customerPhone;
    String customerEmail;
    String movieTitle;
    int bookingPrice;
    LocalDateTime bookingCreateAt;
    List<Snack> snacks;
    List<Ticket> tickets;
    Showtime showtime;
}
