package com.company.project.tickets.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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

  String seatId;
  String bookingId;
  int ticketPrice;

  @CreationTimestamp
  LocalDateTime ticketCreateAt;

}
