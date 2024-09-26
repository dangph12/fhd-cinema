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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

  @PostMapping
  ResponseEntity<ApiResponse<SeatType>> addSeatType(@Valid @RequestBody SeatTypeCreationRequest request) {
    
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<SeatType>builder()
      .status(Status.SUCCESS.getValue())
      .message(SeatTypeStatusMessage.GET_SUCCESS.getMessage())
      .build());
  }

}
