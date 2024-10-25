package com.company.project.module.customers.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.dto.request.UpdatePasswordRequest;
import com.company.project.module.customers.common.CustomerStatusMessage;
import com.company.project.module.customers.dto.request.CustomerUpdateRequest;
import com.company.project.module.customers.dto.response.CustomerDto;
import com.company.project.module.customers.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerController {

  @Autowired
  private CustomerService customerService;

  @GetMapping
  public ResponseEntity<ApiResponse<List<CustomerDto>>> getAllCustomers() {
    List<CustomerDto> customers = customerService.getAllCustomers(); // Sử dụng DTO thay vì entity
    return ResponseEntity.ok().body(ApiResponse.<List<CustomerDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(CustomerStatusMessage.GET_SUCCESS.getMessage())
        .data(customers)
        .build());
  }

  @GetMapping("/{customerId}")
  public ResponseEntity<ApiResponse<CustomerDto>> getCustomerById(@PathVariable String customerId) {
    CustomerDto customer = customerService.getCustomerDtoById(customerId);
    return ResponseEntity.ok().body(ApiResponse.<CustomerDto>builder()
        .status(Status.SUCCESS.getValue())
        .message(CustomerStatusMessage.GET_SUCCESS.getMessage())
        .data(customer)
        .build());
  }

  @PutMapping("/{customerId}")
  public ResponseEntity<ApiResponse<CustomerDto>> updateCustomer(
      @PathVariable String customerId,
      @Valid @RequestBody CustomerUpdateRequest request) {
    CustomerDto updatedCustomer = customerService.updateCustomer(customerId, request);
    return ResponseEntity.ok().body(ApiResponse.<CustomerDto>builder()
        .status(Status.SUCCESS.getValue())
        .message(CustomerStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(updatedCustomer)
        .build());
  }

  @DeleteMapping("/{customerId}")
  ResponseEntity<ApiResponse<Void>> deleteCustomer(
      @PathVariable(name = "customerId") String customerId) {
    customerService.deleteCustomerById(customerId);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.SUCCESS.getValue())
            .message(CustomerStatusMessage.DELETE_SUCCESS.getMessage())
            .build());
  }

  @GetMapping(params = "search")
  public ResponseEntity<ApiResponse<ApiPagination<CustomerDto>>> filterCustomers(
      @RequestParam(value = "search") String search,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "sortBy", defaultValue = "customerName") String sortBy,
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
      @RequestParam(value = "pageSize", defaultValue = "10") int pageSize) {

    ApiPagination<CustomerDto> paginatedCustomers = customerService.filterCustomers(search, page, pageSize, sortBy,
        sortDirection);
    return ResponseEntity.ok().body(ApiResponse.<ApiPagination<CustomerDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(CustomerStatusMessage.GET_SUCCESS.getMessage())
        .data(paginatedCustomers)
        .build());
  }

  @GetMapping("/email/{customerEmail}")
  ResponseEntity<ApiResponse<CustomerDto>> getCustomerByEmail(
      @PathVariable(name = "customerEmail") String customerEmail) {
    CustomerDto customerDto = customerService.getCustomerByCustomerEmail(customerEmail);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<CustomerDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(CustomerStatusMessage.GET_SUCCESS.getMessage())
            .data(customerDto)
            .build());
  }

  @PutMapping("/update-password")
  ResponseEntity<ApiResponse<CustomerDto>> updateCustomerPassword(@RequestBody @Valid UpdatePasswordRequest request) {
    CustomerDto customerDto = customerService.getCustomerByCustomerEmail(request.getCustomerEmail());
    customerService.updatePasswordByCustomerEmail(request);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<CustomerDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(CustomerStatusMessage.UPDATE_PASSWORD_SUCCESS.getMessage())
            .data(customerDto)
            .build());
  }

}
