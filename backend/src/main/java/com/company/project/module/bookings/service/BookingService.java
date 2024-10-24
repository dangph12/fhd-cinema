package com.company.project.module.bookings.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.bookings.common.BookingStatusMessage;
import com.company.project.module.bookings.dto.request.BookingCreationRequest;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.exception.BookingException;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.service.CustomerService;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.service.ShowtimeService;
import com.company.project.utils.Utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

  @Autowired
  @Lazy
  private BookingRepository bookingRepository;

  @Autowired
  @Lazy
  private ShowtimeService showtimeService;

  @Autowired
  @Lazy
  private CustomerService customerService;

  @Autowired
  private Utils utils;

  public List<Booking> getAllBooking() {
    return bookingRepository.findAll();
  }

  public Booking getBookingById(String bookingId) {
    return bookingRepository.findById(bookingId)
        .orElseThrow(() -> new BookingException(
            Status.FAIL.getValue(),
            BookingStatusMessage.NOT_EXIST.getMessage()));
  }

  public Booking createBooking(BookingCreationRequest request) {
    Showtime showtime = showtimeService.getShowtimeById(request.getShowtimeId());
    Customer customer = customerService.getCustomerById(request.getCustomerId());

    Booking booking = Booking.builder()
        .showtime(showtime)
        .customer(customer)
        .bookingPrice(request.getBookingPrice())
        .build();

    return bookingRepository.save(booking);
  }

  public Booking updateBooking(String bookingId, BookingCreationRequest request) {
    if (!bookingRepository.existsById(bookingId)) {
      throw new BookingException(Status.FAIL.getValue(), BookingStatusMessage.NOT_EXIST.getMessage());
    }

    Showtime showtime = showtimeService.getShowtimeById(request.getShowtimeId());
    Customer customer = customerService.getCustomerById(request.getCustomerId());

    Booking existedBooking = this.getBookingById(bookingId);
    existedBooking.setShowtime(showtime);
    existedBooking.setCustomer(customer);
    existedBooking.setBookingPrice(request.getBookingPrice());

    return bookingRepository.save(existedBooking);
  }

  public void deleteBookingById(String bookingId) {
    if (!bookingRepository.existsById(bookingId)) {
      throw new BookingException(Status.FAIL.getValue(), BookingStatusMessage.NOT_EXIST.getMessage());
    }

    bookingRepository.deleteById(bookingId);
  }

  public List<Booking> getAllBookingFromCustomer(String customerId) {
    Customer customer = customerService.getCustomerById(customerId);

    return bookingRepository.findByCustomer(customer);
  }

  public ApiPagination<Booking> filterBookings(String bookingId, int page, int pageSize,
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

    Page<Booking> bookingPages = bookingRepository.findByBookingIdContainingIgnoreCase(bookingId, pageable);
    long count = bookingRepository.countByBookingIdContainingIgnoreCase(bookingId);

    ApiPagination<Booking> bookingPagination = ApiPagination.<Booking>builder()
        .result(bookingPages.getContent())
        .count(count)
        .build();
    
    return bookingPagination;
  }

}
