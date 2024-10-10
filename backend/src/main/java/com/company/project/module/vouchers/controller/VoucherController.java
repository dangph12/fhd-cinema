package com.company.project.module.vouchers.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.vouchers.common.VoucherStatusMessage;
import com.company.project.module.vouchers.dto.request.VoucherCreationRequest;
import com.company.project.module.vouchers.entity.Voucher;
import com.company.project.module.vouchers.service.VoucherService;

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
@RequestMapping("/vouchers")
public class VoucherController {

  @Autowired
  private VoucherService voucherService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<Voucher>>> getAllVoucher() {
    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<List<Voucher>>builder()
            .status(Status.SUCCESS.getValue())
            .message(VoucherStatusMessage.GET_SUCCESS.getMessage())
            .data(voucherService.getAllVoucher())
            .build());
  }

  @GetMapping("/{voucherId}")
  ResponseEntity<ApiResponse<Voucher>> getVoucherById(
    @PathVariable(name = "voucherId") String voucherId) {
    Voucher voucher = voucherService.getVoucherById(voucherId);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<Voucher>builder()
            .status(Status.SUCCESS.getValue())
            .message(VoucherStatusMessage.GET_SUCCESS.getMessage())
            .data(voucher)
            .build());
  }

  @PostMapping
  ResponseEntity<ApiResponse<Voucher>> addVoucher(
    @RequestBody @Valid VoucherCreationRequest request) {
    Voucher voucher =  voucherService.createVoucher(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<Voucher>builder()
      .status(Status.SUCCESS.getValue())
      .message(VoucherStatusMessage.CREATE_SUCCESS.getMessage())
      .data(voucher)
      .build());
  }

  @PutMapping("/{voucherId}")
  ResponseEntity<ApiResponse<Voucher>> updateVoucher(
    @PathVariable(name = "voucherId") String voucherId,
    @Valid @RequestBody VoucherCreationRequest request) {
    Voucher voucher = voucherService.updateVoucher(voucherId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Voucher>builder()
        .status(Status.SUCCESS.getValue())
        .message(VoucherStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(voucher)
        .build());
  }

  @DeleteMapping("/{voucherId}")
  ResponseEntity<ApiResponse<Void>> deleteVoucher(
    @PathVariable(name = "voucherId") String voucherId) {
    voucherService.deleteVoucherById(voucherId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(VoucherStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

}
