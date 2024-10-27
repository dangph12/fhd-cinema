package com.company.project.module.tickets.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.service.BookingService;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.seats.repository.SeatRepository;
import com.company.project.module.seats.service.SeatService;
import com.company.project.module.tickets.common.TicketStatusMessage;
import com.company.project.module.tickets.dto.request.TicketCreationRequest;
import com.company.project.module.tickets.dto.response.TicketDto;
import com.company.project.module.tickets.entity.Ticket;
import com.company.project.module.tickets.exception.TicketException;
import com.company.project.module.tickets.repository.TicketRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

  private final TicketRepository ticketRepository;
  private final SeatService seatService;
  private final BookingService bookingService;
  private final Utils utils;
  private final ModelMapper modelMapper;
  private final SeatRepository seatRepository;

  public TicketService(TicketRepository ticketRepository, SeatService seatService,
      BookingService bookingService, Utils utils, ModelMapper modelMapper, SeatRepository seatRepository) {
    this.ticketRepository = ticketRepository;
    this.seatService = seatService;
    this.bookingService = bookingService;
    this.utils = utils;
    this.modelMapper = modelMapper;
    this.seatRepository = seatRepository;
  }

  private TicketDto convertToTicketDto(Ticket ticket) {
    return modelMapper.map(ticket, TicketDto.class);
  }

  public List<TicketDto> getAllTickets() {
    List<Ticket> tickets = ticketRepository.findAllByIsDeletedFalse();
    tickets.forEach(this::calculateTotalBookingPrice);
    return tickets.stream()
        .map(this::convertToTicketDto)
        .collect(Collectors.toList());
  }

  public Ticket getTicketById(String ticketId) {
    Ticket ticket = ticketRepository.findByTicketIdAndIsDeletedFalse(ticketId);
    if (ticket == null) {
      throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.NOT_EXIST.getMessage());
    }
    this.calculateTotalBookingPrice(ticket);
    return ticket;
  }

  public TicketDto getTicketDtoById(String ticketId) {
    Ticket ticket = this.getTicketById(ticketId);
    return this.convertToTicketDto(ticket);
  }

  public TicketDto createTicket(TicketCreationRequest request) {
    if (ticketRepository.existsBySeat_SeatIdAndIsDeletedFalse(request.getSeatId())) {
      throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.SEAT_ALREADY_BOOKED.getMessage());
    }

    Booking booking = bookingService.getBookingById(request.getBookingId());
    Seat seat = seatService.getSeatById(request.getSeatId());

    Ticket ticket = Ticket.builder()
        .seat(seat)
        .booking(booking)
        .build();

    this.calculateTotalBookingPrice(ticket);

    seat.setBooked(true);

    ticketRepository.save(ticket);
    return convertToTicketDto(ticket);
  }

  public TicketDto updateTicket(String ticketId, TicketCreationRequest request) {
    Ticket existingTicket = this.getTicketById(ticketId);
    if (!existingTicket.getSeat().getSeatId().equals(request.getSeatId()) &&
        ticketRepository.existsBySeat_SeatIdAndIsDeletedFalse(request.getSeatId())) {
      throw new TicketException(Status.FAIL.getValue(), TicketStatusMessage.SEAT_ALREADY_BOOKED.getMessage());
    }
    existingTicket.getSeat().setBooked(false);

    Booking booking = bookingService.getBookingById(request.getBookingId());
    Seat seat = seatService.getSeatById(request.getSeatId());

    existingTicket.setBooking(booking);
    existingTicket.setSeat(seat);

    existingTicket.getSeat().setBooked(true);

    this.calculateTotalBookingPrice(existingTicket);

    ticketRepository.save(existingTicket);
    return this.convertToTicketDto(existingTicket);
  }

  public void deleteTicketById(String ticketId) {
    Ticket existingTicket = this.getTicketById(ticketId);

    Seat seat = existingTicket.getSeat();
    seat.setBooked(false);
    seatRepository.save(seat);

    existingTicket.setSeat(null);
    existingTicket.setBooking(null);
    existingTicket.setDeleted(true);
    ticketRepository.save(existingTicket);
  }

  public ApiPagination<TicketDto> filterTickets(String ticketId, int page, int pageSize,
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

    Page<Ticket> ticketPages = ticketRepository.searchTickets(ticketId, pageable);
    long count = ticketRepository.countTickets(ticketId);

    List<TicketDto> ticketDtos = ticketPages.getContent().stream()
        .map(this::convertToTicketDto)
        .collect(Collectors.toList());

    return ApiPagination.<TicketDto>builder()
        .result(ticketDtos)
        .count(count)
        .build();
  }

  public void calculateTotalBookingPrice(Ticket ticket) {
    int seatPrice = ticket.getSeat().getSeatType().getSeatTypePrice();

    int showtimePrice = ticket.getBooking().getShowtime().getShowtimePrice();

    int totalTicketPrice = seatPrice + showtimePrice;

    ticket.setTicketPrice(totalTicketPrice);
  }
}
