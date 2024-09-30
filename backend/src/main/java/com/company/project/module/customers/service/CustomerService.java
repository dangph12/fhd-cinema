package com.company.project.module.customers.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.customers.common.CustomerStatusMessage;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.exception.CustomerException;
import com.company.project.module.customers.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

  @Autowired
  private CustomerRepository customerRepository;
  
  public List<Customer> getAllCustomer() {
    return customerRepository.findAll();
  }
  
  public Customer getCustomerById(String seatTypeId) {
    return customerRepository.findById(seatTypeId)
    .orElseThrow(() -> new CustomerException(
      Status.FAIL.getValue(), 
      CustomerStatusMessage.NOT_EXIST.getMessage()));
  }

/**
  public List<String> getCustomerNamesByScreenId(String screenId) {
    Screen screen = screenService.findScreenById(screenId);

    return screen.getCustomers()
                 .stream()
                 .map(Customer::getCustomerName)
                 .collect(Collectors.toList()); 
  }

  public boolean existCustomerNameInScreen(String screenId, String seatName) {
    List<String> existCustomerName = this.getCustomerNamesByScreenId(screenId);

    return existCustomerName.contains(seatName);
  }

  public Customer createCustomer(CustomerCreationRequest request) {

    if (this.existCustomerNameInScreen(request.getScreenId(), request.getCustomerName())) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_SEAT.getMessage());
    }

    CustomerType seatType = seatTypeService.getCustomerTypeById(request.getCustomerTypeId());
    Screen screen = screenService.findScreenById(request.getScreenId());

    Customer seat = Customer.builder()
      .seatType(seatType)
      .screen(screen)
      .seatName(request.getCustomerName())
      .isBooked(request.isBooked())
      .build();

    return seatRepository.save(seat);
  }

  public Customer updateCustomer(String seatId, CustomerCreationRequest request) {
    if (!seatRepository.existsById(seatId)) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EXIST.getMessage());
    }

    Customer existedCustomer = this.getCustomerById(seatId);

    if (!existedCustomer.getCustomerName().equals(request.getCustomerName()) 
        && this.existCustomerNameInScreen(request.getScreenId(), request.getCustomerName())) {
        throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_SEAT.getMessage());
    }

    CustomerType seatType = seatTypeService.getCustomerTypeById(request.getCustomerTypeId());
    Screen screen = screenService.findScreenById(request.getScreenId());

    existedCustomer.setCustomerType(seatType);
    existedCustomer.setScreen(screen);
    existedCustomer.setBooked(request.isBooked());

    if (!existedCustomer.getCustomerName().equals(request.getCustomerName())) {
      existedCustomer.setCustomerName(request.getCustomerName());
    }

    return seatRepository.save(existedCustomer);
  }

  public void deleteCustomerById(String seatId) {
    if (!seatRepository.existsById(seatId)) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EXIST.getMessage());
    }

    seatRepository.deleteById(seatId);
  }
  **/

}


