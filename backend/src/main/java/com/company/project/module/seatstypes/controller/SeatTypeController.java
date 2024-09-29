package com.company.project.module.seatstypes.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.seatstypes.common.SeatTypeStatusMessage;
import com.company.project.module.seatstypes.dto.request.SeatTypeCreationRequest;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.seatstypes.service.SeatTypeService;

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
@RequestMapping("/seats-types")
public class SeatTypeController {
  
  @Autowired
  private SeatTypeService seatTypeService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<SeatType>>> getAllSeatType() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<SeatType>>builder()
      .status(Status.SUCCESS.getValue())
      .message(SeatTypeStatusMessage.GET_SUCCESS.getMessage())
      .data(seatTypeService.getAllSeatType())
      .build());
  }

  @GetMapping("/{seatTypeId}")
  ResponseEntity<ApiResponse<SeatType>> getSeatTypeById(@PathVariable(name = "seatTypeId") String seatTypeId) {
    SeatType seatType = seatTypeService.getSeatTypeById(seatTypeId);

    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<SeatType>builder()
      .status(Status.SUCCESS.getValue())
      .message(SeatTypeStatusMessage.GET_SUCCESS.getMessage())
      .data(seatType)
      .build());
  }

  @PostMapping
  ResponseEntity<ApiResponse<SeatType>> addSeatType(
    @RequestBody @Valid SeatTypeCreationRequest request) {
    SeatType seatType =  seatTypeService.createSeatType(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<SeatType>builder()
      .status(Status.SUCCESS.getValue())
      .message(SeatTypeStatusMessage.CREATE_SUCCESS.getMessage())
      .data(seatType)
      .build());
  }

  @PutMapping("/{seatTypeId}")
  ResponseEntity<ApiResponse<SeatType>> updateSeatType(
    @PathVariable(name = "seatTypeId") String seatTypeId,
    @Valid @RequestBody SeatTypeCreationRequest request) {
    SeatType seatType = seatTypeService.updateSeatType(seatTypeId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<SeatType>builder()
        .status(Status.SUCCESS.getValue())
        .message(SeatTypeStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(seatType)
        .build());
  }

  @DeleteMapping("/{seatTypeId}")
  ResponseEntity<ApiResponse<Void>> deleteSeatType(
    @PathVariable(name = "seatTypeId") String seatTypeId) {
    seatTypeService.deleteSeatTypeById(seatTypeId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(SeatTypeStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

}
