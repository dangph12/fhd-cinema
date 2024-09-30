package com.company.project.module.seats.controller;


import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.seats.common.SeatStatusMessage;
import com.company.project.module.seats.dto.request.SeatCreationRequest;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.seats.service.SeatService;

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
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/seats")
public class SeatController {
  
  @Autowired
  private SeatService seatService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<Seat>>> getAllSeat() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<Seat>>builder()
      .status(Status.SUCCESS.getValue())
      .message(SeatStatusMessage.GET_SUCCESS.getMessage())
      .data(seatService.getAllSeat())
      .build());
  }

  @GetMapping("/{seatId}")
  ResponseEntity<ApiResponse<Seat>> getSeatById(@PathVariable(name = "seatId") String seatId) {
    Seat seat = seatService.getSeatById(seatId);

    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<Seat>builder()
      .status(Status.SUCCESS.getValue())
      .message(SeatStatusMessage.GET_SUCCESS.getMessage())
      .data(seat)
      .build());
  }
  
  @PostMapping
  ResponseEntity<ApiResponse<Seat>> addSeat(
    @RequestBody @Valid SeatCreationRequest request) {
    Seat seat =  seatService.createSeat(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<Seat>builder()
      .status(Status.SUCCESS.getValue())
      .message(SeatStatusMessage.CREATE_SUCCESS.getMessage())
      .data(seat)
      .build());
  }

  @PutMapping("/{seatId}")
  ResponseEntity<ApiResponse<Seat>> updateSeat(
    @PathVariable(name = "seatId") String seatId,
    @Valid @RequestBody SeatCreationRequest request) {
    Seat seat = seatService.updateSeat(seatId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Seat>builder()
        .status(Status.SUCCESS.getValue())
        .message(SeatStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(seat)
        .build());
  }

  @DeleteMapping("/{seatId}")
  ResponseEntity<ApiResponse<Void>> deleteSeat(
    @PathVariable(name = "seatId") String seatId) {
    seatService.deleteSeatById(seatId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(SeatStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

}
