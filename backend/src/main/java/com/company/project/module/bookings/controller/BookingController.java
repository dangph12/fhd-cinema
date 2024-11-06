package com.company.project.module.bookings.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.ApiViewBooking;
import com.company.project.common.Status;
import com.company.project.module.bookings.common.BookingStatusMessage;
import com.company.project.module.bookings.dto.request.BookingCreationRequest;
import com.company.project.module.bookings.dto.response.BookingDto;
import com.company.project.module.bookings.dto.response.BookingInfoDto;
import com.company.project.module.bookings.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

  private final BookingService bookingService;

  @Autowired
  public BookingController(BookingService bookingService) {
    this.bookingService = bookingService;
  }

  @GetMapping()
  ResponseEntity<ApiResponse<List<BookingDto>>> getAllBookings() {
    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<List<BookingDto>>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.GET_SUCCESS.getMessage())
            .data(bookingService.getAllBookings())
            .build());
  }

  @GetMapping("/{bookingId}")
  ResponseEntity<ApiResponse<BookingDto>> getBookingById(
      @PathVariable(name = "bookingId") String bookingId) {
    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<BookingDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.GET_SUCCESS.getMessage())
            .data(bookingService.getBookingDtoById(bookingId))
            .build());
  }

  @PostMapping
  ResponseEntity<ApiResponse<BookingDto>> addBooking(
      @RequestBody @Valid BookingCreationRequest request) {
    BookingDto booking = bookingService.createBooking(request);

    return ResponseEntity.status(HttpStatus.CREATED)
        .body(ApiResponse.<BookingDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.CREATE_SUCCESS.getMessage())
            .data(booking)
            .build());
  }

  @PutMapping("/{bookingId}")
  ResponseEntity<ApiResponse<BookingDto>> updateBooking(
      @PathVariable(name = "bookingId") String bookingId,
      @Valid @RequestBody BookingCreationRequest request) {
    BookingDto booking = bookingService.updateBooking(bookingId, request);

    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<BookingDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.UPDATE_SUCCESS.getMessage())
            .data(booking)
            .build());
  }

  @DeleteMapping("/{bookingId}")
  ResponseEntity<ApiResponse<Void>> deleteBooking(
      @PathVariable(name = "bookingId") String bookingId) {
    bookingService.deleteBookingById(bookingId);

    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<Void>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.DELETE_SUCCESS.getMessage())
            .build());
  }

  @GetMapping(params = "search")
  ResponseEntity<ApiResponse<ApiPagination<BookingDto>>> filterBookings(
      @RequestParam(value = "bookingId", required = false) String bookingId,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "customerIds", required = false) List<String> customerIds,
      @RequestParam(value = "bookingCreateAt", required = false) List<LocalDate> bookingCreateAt,
      @RequestParam(value = "sortBy", defaultValue = "bookingCreateAt") String sortBy,
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
      @RequestParam(value = "pageSize", defaultValue = "10") int pageSize) {
    ApiPagination<BookingDto> bookings = bookingService.filterBookings(bookingId, page, pageSize, customerIds,
        bookingCreateAt, sortBy, sortDirection);
    return ResponseEntity.ok().body(ApiResponse.<ApiPagination<BookingDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(BookingStatusMessage.GET_SUCCESS.getMessage())
        .data(bookings)
        .build());
  }

  @GetMapping("/view")
  ResponseEntity<ApiResponse<ApiViewBooking<BookingInfoDto>>> filterBookingInfos(
      @RequestParam(value = "bookingId", required = false) String bookingId,
      @RequestParam(value = "cinemaId", required = false) String cinemaId,
      @RequestParam(value = "startDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
      @RequestParam(value = "endDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate,
      @RequestParam(value = "movieId", required = false) String movieId,
      @RequestParam(value = "customerPhone", required = false) String customerPhone,
      @RequestParam(value = "customerEmail", required = false) String customerEmail,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
      @RequestParam(value = "sortBy", defaultValue = "bookingCreateAt") String sortBy,
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection) {

    ApiViewBooking<BookingInfoDto> bookingInfos = bookingService.filterBookingInfos(
        bookingId, cinemaId, startDate, endDate, movieId, customerPhone, customerEmail, page, pageSize, sortBy,
        sortDirection);

    return ResponseEntity.ok().body(ApiResponse.<ApiViewBooking<BookingInfoDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(BookingStatusMessage.GET_SUCCESS.getMessage())
        .data(bookingInfos)
        .build());
  }

  @PostMapping("/{bookingId}/snacks/{snackId}/add")
  public ResponseEntity<ApiResponse<BookingDto>> addSnackToBooking(
      @PathVariable("bookingId") String bookingId,
      @PathVariable("snackId") String snackId) {

    BookingDto updatedBooking = bookingService.addSnackToBooking(bookingId, snackId);
    return ResponseEntity.ok(
        ApiResponse.<BookingDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.ADD_SNACK_SUCCESS.getMessage())
            .data(updatedBooking)
            .build());
  }

  @DeleteMapping("/{bookingId}/snacks/{snackId}/remove")
  public ResponseEntity<ApiResponse<BookingDto>> removeSnackFromBooking(
      @PathVariable("bookingId") String bookingId,
      @PathVariable("snackId") String snackId) {

    BookingDto updatedBooking = bookingService.removeSnackFromBooking(bookingId, snackId);
    return ResponseEntity.ok(
        ApiResponse.<BookingDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(BookingStatusMessage.DELETE_SNACK_SUCCESS.getMessage())
            .data(updatedBooking)
            .build());
  }
}
