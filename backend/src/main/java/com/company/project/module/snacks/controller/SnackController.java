package com.company.project.module.snacks.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.snacks.common.SnackStatusMessage;
import com.company.project.module.snacks.dto.request.SnackCreationRequest;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.snacks.service.SnackService;

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
@RequestMapping("/snacks")
public class SnackController {
  
  @Autowired
  private SnackService snackService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<Snack>>> getAllSnack() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<Snack>>builder()
      .status(Status.SUCCESS.getValue())
      .message(SnackStatusMessage.GET_SUCCESS.getMessage())
      .data(snackService.getAllSnack())
      .build());
  }

  @GetMapping("/{snackId}")
  ResponseEntity<ApiResponse<Snack>> getSnackById(@PathVariable(name = "snackId") String snackId) {
    Snack snack = snackService.getSnackById(snackId);

    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<Snack>builder()
      .status(Status.SUCCESS.getValue())
      .message(SnackStatusMessage.GET_SUCCESS.getMessage())
      .data(snack)
      .build());
  }
  
  @PostMapping
  ResponseEntity<ApiResponse<Snack>> addSnack(
    @RequestBody @Valid SnackCreationRequest request) {
    Snack snack =  snackService.createSnack(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<Snack>builder()
      .status(Status.SUCCESS.getValue())
      .message(SnackStatusMessage.CREATE_SUCCESS.getMessage())
      .data(snack)
      .build());
  }

  @PutMapping("/{snackId}")
  ResponseEntity<ApiResponse<Snack>> updateSnack(
    @PathVariable(name = "snackId") String snackId,
    @Valid @RequestBody SnackCreationRequest request) {
    Snack snack = snackService.updateSnack(snackId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Snack>builder()
        .status(Status.SUCCESS.getValue())
        .message(SnackStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(snack)
        .build());
  }

  @DeleteMapping("/{snackId}")
  ResponseEntity<ApiResponse<Void>> deleteSnack(
    @PathVariable(name = "snackId") String snackId) {
    snackService.deleteSnackById(snackId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(SnackStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

}
