package com.company.project.module.tickets.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.seats.service.SeatService;
import com.company.project.module.tickets.common.TicketStatusMessage;
import com.company.project.module.tickets.dto.request.TicketCreationRequest;
import com.company.project.module.tickets.entity.Ticket;
import com.company.project.module.tickets.exception.TicketException;
import com.company.project.module.tickets.repository.TicketRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService{

  private final TicketRepository ticketRepository;

  @Autowired
  private SeatService seatService;


  public TicketService(TicketRepository ticketRepository) {
    this.ticketRepository = ticketRepository;
  }

  public List<Ticket> getAllTickets() {
    return ticketRepository.findAll();
  }

  public Ticket getTicketById(String ticketId) {
    return ticketRepository.findById(ticketId)
      .orElseThrow(() -> new TicketException(
        Status.FAIL.getValue(), 
        TicketStatusMessage.NOT_EXIST.getMessage()));
  }

  public Ticket createTicket(TicketCreationRequest request) {
    Seat seat = seatService.getSeatById(request.getSeatId());

    Ticket ticket = Ticket.builder()
      .seat(seat)
      .ticketPrice(request.getTicketPrice())
      .build();

    return ticketRepository.save(ticket);
  }

  public Ticket updateTicket(String ticketId, TicketCreationRequest request) {
    if (!ticketRepository.existsByTicketId(ticketId)) {
        throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.NOT_EXIST.getMessage());
    }

    Ticket existingTicket = this.getTicketById(ticketId);

    Seat seat = seatService.getSeatById(request.getSeatId());

    existingTicket = Ticket.builder()
      .seat(seat)
      .ticketPrice(request.getTicketPrice())
      .build();

    return ticketRepository.save(existingTicket);
  }

  public void deleteTicketById(String ticketId) {
    if (!ticketRepository.existsByTicketId(ticketId)) {
      throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.NOT_EXIST.getMessage());
    }

    ticketRepository.deleteById(ticketId);
  }

}
