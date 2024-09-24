package com.company.project.module.tickets.entity;

import java.time.LocalDateTime;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.seats.entity.Seat;
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

  @ManyToOne
  @JoinColumn(name="booking_id", nullable=false)
  Booking booking;
  @OneToOne(optional = false)
  Seat seat;

}
