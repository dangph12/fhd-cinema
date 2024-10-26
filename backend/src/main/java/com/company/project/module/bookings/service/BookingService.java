package com.company.project.module.bookings.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.bookings.common.BookingStatusMessage;
import com.company.project.module.bookings.dto.request.BookingCreationRequest;
import com.company.project.module.bookings.dto.response.BookingDto;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.exception.BookingException;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.service.CustomerService;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.service.ShowtimeService;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;
import com.company.project.module.tickets.service.TicketService;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

  private final BookingRepository bookingRepository;
  private final ShowtimeService showtimeService;
  private final CustomerService customerService;
  private final Utils utils;
  private final ModelMapper modelMapper;
  private final TicketService ticketService;

  public BookingService(BookingRepository bookingRepository, ShowtimeService showtimeService,
      CustomerService customerService, Utils utils, ModelMapper modelMapper, @Lazy TicketService ticketService) {
    this.bookingRepository = bookingRepository;
    this.showtimeService = showtimeService;
    this.customerService = customerService;
    this.utils = utils;
    this.modelMapper = modelMapper;
    this.ticketService = ticketService;
  }

  private BookingDto convertToBookingDto(Booking booking) {
    return modelMapper.map(booking, BookingDto.class);
  }

  public List<BookingDto> getAllBookings() {
    List<Booking> bookings = bookingRepository.findAllByIsDeletedFalse();
    bookings.forEach(this::calculateTotalBookingPrice);
    return bookings.stream()
        .map(this::convertToBookingDto)
        .collect(Collectors.toList());
  }

  public Booking getBookingById(String bookingId) {
    Booking booking = bookingRepository.findByBookingIdAndIsDeletedFalse(bookingId);
    if (booking == null) {
      throw new BookingException(Status.FAIL.getValue(), BookingStatusMessage.NOT_EXIST.getMessage());
    }
    this.calculateTotalBookingPrice(booking);
    return booking;
  }

  public BookingDto getBookingDtoById(String bookingId) {
    Booking booking = this.getBookingById(bookingId);
    return this.convertToBookingDto(booking);
  }

  public BookingDto createBooking(BookingCreationRequest request) {
    Showtime showtime = showtimeService.getShowtimeById(request.getShowtimeId());
    Customer customer = customerService.getCustomerById(request.getCustomerId());

    Booking booking = Booking.builder()
        .showtime(showtime)
        .customer(customer)
        .build();

    bookingRepository.save(booking);
    return this.convertToBookingDto(booking);
  }

  public BookingDto updateBooking(String bookingId, BookingCreationRequest request) {
    Booking existingBooking = this.getBookingById(bookingId);

    Showtime showtime = showtimeService.getShowtimeById(request.getShowtimeId());
    Customer customer = customerService.getCustomerById(request.getCustomerId());

    existingBooking.setShowtime(showtime);
    existingBooking.setCustomer(customer);

    bookingRepository.save(existingBooking);
    return this.convertToBookingDto(existingBooking);
  }

  public void deleteBookingById(String bookingId) {
    Booking existingBooking = this.getBookingById(bookingId);
    
    existingBooking.getTickets().forEach(ticket -> {
      ticketService.deleteTicketById(ticket.getTicketId());
    });
    existingBooking.setDeleted(true);
    bookingRepository.save(existingBooking);
  }

  public List<Booking> getAllBookingFromCustomer(String customerId) {
    Customer customer = customerService.getCustomerById(customerId);

    return bookingRepository.findByCustomerAndIsDeletedFalse(customer);
  }

  public ApiPagination<BookingDto> filterBookings(String bookingId, int page, int pageSize,
      List<String> customerIds, List<LocalDate> bookingCreateAt,
      String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new BookingException(Status.FAIL.getValue(), BookingStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> bookingFieldNames = utils.getEntityFields(Booking.class);
    if (!bookingFieldNames.contains(sortBy)) {
      throw new BookingException(Status.FAIL.getValue(), BookingStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);
    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Booking> bookingPages = bookingRepository.searchBookings(bookingId, customerIds, bookingCreateAt, pageable);
    long count = bookingRepository.countBookings(bookingId, customerIds, bookingCreateAt);

    List<BookingDto> bookingDtos = bookingPages.getContent().stream()
        .map(this::convertToBookingDto)
        .collect(Collectors.toList());

    return ApiPagination.<BookingDto>builder()
        .result(bookingDtos)
        .count(count)
        .build();
  }

  public void calculateTotalBookingPrice(Booking booking) {
    int totalTicketPrice = booking.getTickets().stream()
        .filter(ticket -> !ticket.isDeleted())
        .mapToInt(Ticket::getTicketPrice)
        .sum();

    int totalSnackPrice = booking.getSnacks().stream()
        .filter(snack -> !snack.isDeleted())
        .mapToInt(Snack::getSnackPrice)
        .sum();

    int totalBookingPrice = totalTicketPrice + totalSnackPrice;

    booking.setBookingPrice(totalBookingPrice);
  }
}
