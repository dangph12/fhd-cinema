package com.company.project.module.tickets.repository;

import java.util.List;

import com.company.project.module.tickets.entity.Ticket;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, String> {

  boolean existsByTicketIdAndIsDeletedFalse(String ticketId);

  boolean existsBySeat_SeatIdAndIsDeletedFalse(String seatId);

  List<Ticket> findAllByIsDeletedFalse();

  Ticket findByTicketIdAndIsDeletedFalse(String ticketId);

  @Query("SELECT t FROM Ticket t WHERE " +
         "t.isDeleted = false AND " +
         "(:ticketId IS NULL OR LOWER(t.ticketId) LIKE LOWER(CONCAT('%', :ticketId, '%')))" )
  Page<Ticket> searchTickets(@Param("ticketId") String ticketId,
                             Pageable pageable);

  @Query("SELECT COUNT(t) FROM Ticket t WHERE " +
         "t.isDeleted = false AND " +
         "(:ticketId IS NULL OR LOWER(t.ticketId) LIKE LOWER(CONCAT('%', :ticketId, '%')))" )
  long countTickets(@Param("ticketId") String ticketId);
}
