package com.company.project.module.bookings.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.bookings.common.BookingStatusMessage;
import com.company.project.module.bookings.dto.request.BookingCreationRequest;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bookings")
public class BookingController {
  
  @Autowired
  private BookingService bookingService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<Booking>>> getAllBooking() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<Booking>>builder()
      .status(Status.SUCCESS.getValue())
      .message(BookingStatusMessage.GET_SUCCESS.getMessage())
      .data(bookingService.getAllBooking())
      .build());
  }

  @GetMapping("/{bookingId}")
  ResponseEntity<ApiResponse<Booking>> getBookingById(
    @PathVariable(name = "bookingId") String bookingId) {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<Booking>builder()
      .status(Status.SUCCESS.getValue())
      .message(BookingStatusMessage.GET_SUCCESS.getMessage())
      .data(bookingService.getBookingById(bookingId))
      .build());
  }
  
  @PostMapping
  ResponseEntity<ApiResponse<Booking>> addBooking(
    @RequestBody @Valid BookingCreationRequest request) {
    Booking booking =  bookingService.createBooking(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<Booking>builder()
      .status(Status.SUCCESS.getValue())
      .message(BookingStatusMessage.CREATE_SUCCESS.getMessage())
      .data(booking)
      .build());
  }

  @PutMapping("/{bookingId}")
  ResponseEntity<ApiResponse<Booking>> updateBooking(
    @PathVariable(name = "bookingId") String bookingId,
    @Valid @RequestBody BookingCreationRequest request) {
    Booking booking = bookingService.updateBooking(bookingId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Booking>builder()
        .status(Status.SUCCESS.getValue())
        .message(BookingStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(booking)
        .build());
  }

  @DeleteMapping("/{bookingId}")
  ResponseEntity<ApiResponse<Void>> deleteBooking(
    @PathVariable(name = "bookingId") String bookingId) {
    bookingService.deleteBookingById(bookingId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(BookingStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

  @GetMapping(params = "search")
  ResponseEntity<ApiResponse<ApiPagination<Booking>>> filterBookings(
      @RequestParam(value = "search") String search,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "sortBy", defaultValue = "bookingCreateAt") String sortBy, 
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
      @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
    return ResponseEntity.ok().body(ApiResponse.<ApiPagination<Booking>>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.GET_SUCCESS.getMessage())
            .data(bookingService.filterBookings(search, page, pageSize, sortBy, sortDirection))
            .build());
  }

}
