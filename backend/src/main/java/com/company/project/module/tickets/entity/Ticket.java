package com.company.project.module.tickets.entity;

import java.time.LocalDateTime;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.seats.entity.Seat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tickets")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String ticketId;

    int ticketPrice;

    @CreationTimestamp
    LocalDateTime ticketCreateAt;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "booking_id", nullable = false)
    Booking booking;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "seat_id", referencedColumnName = "seat_id")
    Seat seat;
}
