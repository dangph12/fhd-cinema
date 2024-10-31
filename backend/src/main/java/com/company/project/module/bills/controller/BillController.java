package com.company.project.module.bills.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.bills.common.BillStatusMessage;
import com.company.project.module.bills.dto.request.BillCreationRequest;
import com.company.project.module.bills.dto.response.BillDto;
import com.company.project.module.bills.service.BillService;

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
@RequestMapping("/bills")
public class BillController {

  private final BillService billService;

  @Autowired
  public BillController(BillService billService) {
    this.billService = billService;
  }

  @GetMapping
  public ResponseEntity<ApiResponse<List<BillDto>>> getAllBills() {
    List<BillDto> bills = billService.getAllBills();
    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<List<BillDto>>builder()
            .status(Status.SUCCESS.getValue())
            .message(BillStatusMessage.GET_SUCCESS.getMessage())
            .data(bills)
            .build());
  }

  @GetMapping("/{billId}")
  public ResponseEntity<ApiResponse<BillDto>> getBillById(@PathVariable(name = "billId") String billId) {
    BillDto bill = billService.getBillDtoById(billId);
    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<BillDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(BillStatusMessage.GET_SUCCESS.getMessage())
            .data(bill)
            .build());
  }

  @PostMapping
  public ResponseEntity<ApiResponse<BillDto>> addBill(@RequestBody @Valid BillCreationRequest request) {
    BillDto bill = billService.createBill(request);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(ApiResponse.<BillDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(BillStatusMessage.CREATE_SUCCESS.getMessage())
            .data(bill)
            .build());
  }

  @DeleteMapping("/{billId}")
  public ResponseEntity<ApiResponse<Void>> deleteBill(@PathVariable(name = "billId") String billId) {
    billService.deleteBillById(billId);
    return ResponseEntity.status(HttpStatus.OK)
        .body(ApiResponse.<Void>builder()
            .status(Status.SUCCESS.getValue())
            .message(BillStatusMessage.DELETE_SUCCESS.getMessage())
            .build());
  }

  @GetMapping(params = "search")
  public ResponseEntity<ApiResponse<ApiPagination<BillDto>>> filterBills(
      @RequestParam(value = "search", required = false) String search,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "isPaids", required = false) List<Boolean> isPaids,
      @RequestParam(value = "sortBy", defaultValue = "billCreatedAt") String sortBy,
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
      @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {

    ApiPagination<BillDto> bills = billService.filterBills(search, page, pageSize, isPaids, sortBy, sortDirection);
    return ResponseEntity.ok().body(ApiResponse.<ApiPagination<BillDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(BillStatusMessage.GET_SUCCESS.getMessage())
        .data(bills)
        .build());
  }

  @PutMapping("/{billId}/pay")
  public ResponseEntity<ApiResponse<Void>> setBillAsPaid(@PathVariable String billId) {
    billService.setBillAsPaid(billId);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.SUCCESS.getValue())
            .message(BillStatusMessage.PAY_SUCCESS.getMessage())
            .build());
  }
}
