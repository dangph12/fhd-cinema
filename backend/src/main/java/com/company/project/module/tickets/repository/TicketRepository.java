package com.company.project.module.tickets.repository;

import com.company.project.module.tickets.entity.Ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, String> {
  boolean existsByTicketId(String ticketId);
  boolean existsBySeat_SeatId(String seatId);
}
