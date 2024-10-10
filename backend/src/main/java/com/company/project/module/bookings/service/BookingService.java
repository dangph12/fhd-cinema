package com.company.project.module.bookings.service;

import java.util.List;

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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
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

}
