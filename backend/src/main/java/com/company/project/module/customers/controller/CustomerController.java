package com.company.project.module.customers.controller;

import java.util.List;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.customers.common.CustomerStatusMessage;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerController {
  
  @Autowired
  private CustomerService customerService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<Customer>>> getAllCustomer() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<Customer>>builder()
      .status(Status.SUCCESS.getValue())
      .message(CustomerStatusMessage.GET_SUCCESS.getMessage())
      .data(customerService.getAllCustomer())
      .build());
  }

  @GetMapping("/{customerId}")
  ResponseEntity<ApiResponse<Customer>> getCustomerById(@PathVariable(name = "customerId") String customerId) {
    Customer customer = customerService.getCustomerById(customerId);

    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<Customer>builder()
      .status(Status.SUCCESS.getValue())
      .message(CustomerStatusMessage.GET_SUCCESS.getMessage())
      .data(customer)
      .build());
  }
  
/**
  @PostMapping
  ResponseEntity<ApiResponse<Customer>> addCustomer(
    @RequestBody @Valid CustomerCreationRequest request) {
    Customer customer =  customerService.createCustomer(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<Customer>builder()
      .status(Status.SUCCESS.getValue())
      .message(CustomerStatusMessage.CREATE_SUCCESS.getMessage())
      .data(customer)
      .build());
  }

  @PutMapping("/{customerId}")
  ResponseEntity<ApiResponse<Customer>> updateCustomer(
    @PathVariable(name = "customerId") String customerId,
    @Valid @RequestBody CustomerCreationRequest request) {
    Customer customer = customerService.updateCustomer(customerId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Customer>builder()
        .status(Status.SUCCESS.getValue())
        .message(CustomerStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(customer)
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
  **/

}


