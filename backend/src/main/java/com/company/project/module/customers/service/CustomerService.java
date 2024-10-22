package com.company.project.module.customers.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.exception.AccountException;
import com.company.project.module.accounts.repository.AccountRepository;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.customers.common.CustomerStatusMessage;
import com.company.project.module.customers.dto.request.CustomerCreationRequest;
import com.company.project.module.customers.dto.request.CustomerUpdateRequest;
import com.company.project.module.customers.dto.response.CustomerDto;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.exception.CustomerException;
import com.company.project.module.customers.repository.CustomerRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

  @Autowired
  private CustomerRepository customerRepository;

  @Autowired
  private AccountRepository accountRepository;

  @Autowired
  private ModelMapper modelMapper;

  @Autowired
  private BookingRepository bookingRepository;

  @Autowired
  private Utils utils;

  public List<Customer> getAllCustomer() {
    return customerRepository.findAll();
  }
  
  public Customer getCustomerById(String customerId) {
    return customerRepository.findById(customerId)
    .orElseThrow(() -> new CustomerException(
      Status.FAIL.getValue(), 
      CustomerStatusMessage.NOT_EXIST.getMessage()));
  }

  public Customer createCustomer(CustomerCreationRequest request) {

    if (customerRepository.existsByCustomerPhone(request.getCustomerPhone())) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_PHONE.getMessage());
    }

    if (customerRepository.existsByCustomerEmail(request.getCustomerEmail())) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_EMAIL.getMessage());
    }

    Account account = accountRepository.findById(request.getAccountId())
            .orElseThrow(() -> new AccountException(Status.FAIL.getValue(), "Invalid Account ID"));

    Customer customer = Customer.builder()
      .customerName(request.getCustomerName())
      .customerPhone(request.getCustomerPhone())
      .customerEmail(request.getCustomerEmail())
      .account(account)
      .build();

    return customerRepository.save(customer);
  }

  public Customer updateCustomer(String customerId, CustomerUpdateRequest request) {
    if (!customerRepository.existsById(customerId)) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EXIST.getMessage());
    }

    Customer existedCustomer = this.getCustomerById(customerId);

    if (!existedCustomer.getCustomerPhone().equals(request.getCustomerPhone()) 
        && customerRepository.existsByCustomerPhone(request.getCustomerPhone())) {
        throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_PHONE.getMessage());
    }

    if (!existedCustomer.getCustomerEmail().equals(request.getCustomerEmail()) 
        && customerRepository.existsByCustomerEmail(request.getCustomerEmail())) {
        throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_EMAIL.getMessage());
    }

    existedCustomer.setCustomerName(request.getCustomerName());

    if (!existedCustomer.getCustomerPhone().equals(request.getCustomerPhone())) {
      existedCustomer.setCustomerPhone(request.getCustomerPhone());
    }

    if (!existedCustomer.getCustomerEmail().equals(request.getCustomerEmail())) {
      existedCustomer.setCustomerEmail(request.getCustomerEmail());
    }

    return customerRepository.save(existedCustomer);
  }

  public void deleteCustomerById(String customerId) {
    if (!customerRepository.existsById(customerId)) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EXIST.getMessage());
    }

    customerRepository.deleteById(customerId);
  }



  public CustomerDto getCustomerByAccountId(String accountId) {
    Account account = accountRepository.findById(accountId)
            .orElseThrow(() -> new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage()));

    return getCustomerDto(account);
  }

  public CustomerDto getUserInformationByAccountName(String accountName) {
    Account account = accountRepository.findByAccountName(accountName)
            .orElseThrow(() -> new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage()));

    return getCustomerDto(account);
  }

  private CustomerDto getCustomerDto(Account account) {
    Customer customer = account.getCustomer();

    if (customer == null) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EXIST.getMessage());
    }

    List<Booking> bookings = bookingRepository.findByCustomer(customer);

    return CustomerDto.builder()
            .customerId(customer.getCustomerId())
            .customerName(customer.getCustomerName())
            .customerPhone(customer.getCustomerPhone())
            .customerEmail(customer.getCustomerEmail())
            .account(account)
            .bookings(bookings)
            .build();
  }

  public Customer convertToCustomer(CustomerDto customerDto) {

      return modelMapper.map(customerDto, Customer.class);
  }

  public ApiPagination<Customer> filterCustomers(String customerName, int page, int pageSize,
        String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> customerFieldNames = utils.getEntityFields(Customer.class);

    if (!customerFieldNames.contains(sortBy)) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);

    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Customer> customerPages = customerRepository.findByCustomerNameContainingIgnoreCase(customerName, pageable);
    long count = customerRepository.countByCustomerNameContainingIgnoreCase(customerName);

    ApiPagination<Customer> customerPagination = ApiPagination.<Customer>builder()
        .result(customerPages.getContent())
        .count(count)
        .build();
    
    return customerPagination;
  }

}


