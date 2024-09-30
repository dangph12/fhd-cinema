package com.company.project.module.bills.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.bills.common.BillStatusMessage;
import com.company.project.module.bills.dto.request.BillCreationRequest;
import com.company.project.module.bills.entity.Bill;
import com.company.project.module.bills.service.BillService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bills")
public class BillController {
  
  @Autowired
  private BillService billService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<Bill>>> getAllBill() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<Bill>>builder()
      .status(Status.SUCCESS.getValue())
      .message(BillStatusMessage.GET_SUCCESS.getMessage())
      .data(billService.getAllBill())
      .build());
  }

  @GetMapping("/{billId}")
  ResponseEntity<ApiResponse<Bill>> getBillById(@PathVariable(name = "billId") String billId) {
    Bill bill = billService.getBillById(billId);

    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<Bill>builder()
      .status(Status.SUCCESS.getValue())
      .message(BillStatusMessage.GET_SUCCESS.getMessage())
      .data(bill)
      .build());
  }
  
  @PostMapping
  ResponseEntity<ApiResponse<Bill>> addBill(
    @RequestBody @Valid BillCreationRequest request) {
    Bill bill =  billService.createBill(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<Bill>builder()
      .status(Status.SUCCESS.getValue())
      .message(BillStatusMessage.CREATE_SUCCESS.getMessage())
      .data(bill)
      .build());
  }

  /**
  @PutMapping("/{billId}")
  ResponseEntity<ApiResponse<Bill>> updateBill(
    @PathVariable(name = "billId") String billId,
    @Valid @RequestBody BillCreationRequest request) {
    Bill bill = billService.updateBill(billId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Bill>builder()
        .status(Status.SUCCESS.getValue())
        .message(BillStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(bill)
        .build());
  }
  **/

  @DeleteMapping("/{billId}")
  ResponseEntity<ApiResponse<Void>> deleteBill(
    @PathVariable(name = "billId") String billId) {
    billService.deleteBillById(billId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(BillStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

}
