package com.company.project.module.bookings.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiViewBooking;
import com.company.project.common.Status;
import com.company.project.module.bookings.common.BookingStatusMessage;
import com.company.project.module.bookings.dto.request.BookingCreationRequest;
import com.company.project.module.bookings.dto.response.BookingDto;
import com.company.project.module.bookings.dto.response.BookingInfoDto;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.exception.BookingException;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.service.CustomerService;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.service.ShowtimeService;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.snacks.service.SnackService;
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
  private final SnackService snackService;

  public BookingService(BookingRepository bookingRepository, ShowtimeService showtimeService,
      CustomerService customerService, Utils utils, ModelMapper modelMapper, @Lazy TicketService ticketService,
      SnackService snackService) {
    this.bookingRepository = bookingRepository;
    this.showtimeService = showtimeService;
    this.customerService = customerService;
    this.utils = utils;
    this.modelMapper = modelMapper;
    this.ticketService = ticketService;
    this.snackService = snackService;
  }

  private BookingDto convertToBookingDto(Booking booking) {
    return modelMapper.map(booking, BookingDto.class);
  }

  private BookingInfoDto convertToBookingInforDto(Booking booking) {
    return BookingInfoDto.builder()
        .bookingId(booking.getBookingId())
        .bookingPrice(booking.getBookingPrice())
        .bookingCreateAt(booking.getBookingCreateAt())
        .tickets(booking.getTickets())
        .snacks(booking.getSnacks())
        .showtime(booking.getShowtime())
        .customerName(booking.getCustomer().getCustomerName())
        .movieTitle(booking.getShowtime().getMovie().getMovieTitle())
        .build();
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

  public Booking createBooking(String showtimeId, String customerId) {
    Showtime showtime = showtimeService.getShowtimeById(showtimeId);
    Customer customer = customerService.getCustomerById(customerId);

    Booking booking = Booking.builder()
        .showtime(showtime)
        .customer(customer)
        .build();

    return bookingRepository.save(booking);
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
    existingBooking.getBill().setDeleted(true);
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

  public ApiViewBooking<BookingInfoDto> filterBookingInfos(String bookingId, String cinemaId, LocalDateTime startDate,
      LocalDateTime endDate,
      String movieId, String customerPhone, String customerEmail,
      int page, int pageSize, String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new BookingException(Status.FAIL.getValue(), BookingStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);
    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Booking> bookingPages = bookingRepository.searchBookings(startDate, endDate, emptyToNull(movieId), emptyToNull(customerPhone),
        emptyToNull(customerEmail), emptyToNull(cinemaId), emptyToNull(bookingId), pageable);
    long count = bookingPages.getTotalElements();

    List<BookingInfoDto> bookingInfoDtos = bookingPages.getContent().stream()
        .map(this::convertToBookingInforDto)
        .collect(Collectors.toList());

    return ApiViewBooking.<BookingInfoDto>builder()
        .result(bookingInfoDtos)
        .totalPrice(this.calculateTotalPayment(bookingInfoDtos))
        .count(count)
        .build();
  }

  public int calculateTotalPayment(List<BookingInfoDto> bookingInfoDtos) {
    int total = 0;
    for (BookingInfoDto bookingInfoDto : bookingInfoDtos) {
      total += bookingInfoDto.getBookingPrice();
    }
    return total;
  }

  private String emptyToNull(String value) {
    return (value == null || value.trim().isEmpty()) ? null : value;
  }

  public void calculateTotalBookingPrice(Booking booking) {
    int totalTicketPrice = Optional.ofNullable(booking.getTickets())
        .orElse(Collections.emptyList())
        .stream()
        .filter(ticket -> !ticket.isDeleted())
        .mapToInt(Ticket::getTicketPrice)
        .sum();

    int totalSnackPrice = Optional.ofNullable(booking.getSnacks())
        .orElse(Collections.emptyList())
        .stream()
        .filter(snack -> !snack.isDeleted())
        .mapToInt(Snack::getSnackPrice)
        .sum();

    int totalBookingPrice = totalTicketPrice + totalSnackPrice;

    booking.setBookingPrice(totalBookingPrice);
  }

  public BookingDto addSnackToBooking(String bookingId, String snackId) {
    Booking booking = getBookingById(bookingId);
    Snack snack = snackService.getSnackById(snackId);

    if (booking.getSnacks() == null) {
      booking.setSnacks(new ArrayList<>());
    }

    booking.getSnacks().add(snack);
    calculateTotalBookingPrice(booking);
    bookingRepository.save(booking);

    return convertToBookingDto(booking);
  }

  public BookingDto removeSnackFromBooking(String bookingId, String snackId) {
    Booking booking = getBookingById(bookingId);
    Snack snack = snackService.getSnackById(snackId);

    if (!booking.getSnacks().contains(snack)) {
      throw new BookingException(Status.FAIL.getValue(), BookingStatusMessage.NOT_SNACK_EXIST.getMessage());
    }

    booking.getSnacks().remove(snack);
    calculateTotalBookingPrice(booking);
    bookingRepository.save(booking);

    return convertToBookingDto(booking);
  }
}
