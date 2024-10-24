package com.company.project.module.tickets.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.service.BookingService;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.seats.service.SeatService;
import com.company.project.module.tickets.common.TicketStatusMessage;
import com.company.project.module.tickets.dto.request.TicketCreationRequest;
import com.company.project.module.tickets.entity.Ticket;
import com.company.project.module.tickets.exception.TicketException;
import com.company.project.module.tickets.repository.TicketRepository;
import com.company.project.utils.Utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TicketService{

  private final TicketRepository ticketRepository;

  @Autowired
  private SeatService seatService;

  @Autowired
  private BookingService bookingService;

  @Autowired
  private Utils utils;

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
    if (ticketRepository.existsBySeat_SeatId(request.getSeatId())) {
      throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.SEAT_ALREADY_BOOKED.getMessage());
    }

    Booking booking = bookingService.getBookingById(request.getBookingId());
    Seat seat = seatService.getSeatById(request.getSeatId());

    Ticket ticket = Ticket.builder()
      .seat(seat)
      .booking(booking)
      .ticketPrice(request.getTicketPrice())
      .build();

    return ticketRepository.save(ticket);
  }

  public Ticket updateTicket(String ticketId, TicketCreationRequest request) {
    if (!ticketRepository.existsByTicketId(ticketId)) {
        throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.NOT_EXIST.getMessage());
    }

    Ticket existingTicket = this.getTicketById(ticketId);

    Booking booking = bookingService.getBookingById(request.getBookingId());
    Seat seat = seatService.getSeatById(request.getSeatId());

    existingTicket = Ticket.builder()
      .seat(seat)
      .booking(booking)
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

  public ApiPagination<Ticket> filterTickets(String ticketId, int page, int pageSize,
        String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> ticketFieldNames = utils.getEntityFields(Ticket.class);

    if (!ticketFieldNames.contains(sortBy)) {
      throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);

    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Ticket> ticketPages = ticketRepository.findByTicketIdContainingIgnoreCase(ticketId, pageable);
    long count = ticketRepository.countByTicketIdContainingIgnoreCase(ticketId);

    ApiPagination<Ticket> ticketPagination = ApiPagination.<Ticket>builder()
        .result(ticketPages.getContent())
        .count(count)
        .build();
    
    return ticketPagination;
  }

}
