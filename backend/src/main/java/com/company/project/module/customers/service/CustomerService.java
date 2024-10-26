package com.company.project.module.customers.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.request.UpdatePasswordRequest;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.exception.AccountException;
import com.company.project.module.accounts.repository.AccountRepository;
import com.company.project.module.accounts.service.AccountService;
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
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

  private final CustomerRepository customerRepository;
  private final AccountRepository accountRepository;
  private final BookingRepository bookingRepository;
  private final AccountService accountService;
  private final Utils utils;
  private final ModelMapper modelMapper;

  @Autowired
  public CustomerService(CustomerRepository customerRepository, AccountRepository accountRepository,
      BookingRepository bookingRepository, @Lazy AccountService accountService,
      Utils utils, ModelMapper modelMapper) {
    this.customerRepository = customerRepository;
    this.accountRepository = accountRepository;
    this.bookingRepository = bookingRepository;
    this.accountService = accountService;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private CustomerDto convertToCustomerDto(Customer customer) {
    return modelMapper.map(customer, CustomerDto.class);
  }

  public List<CustomerDto> getAllCustomers() {
    List<Customer> customers = customerRepository.findAllByIsDeletedFalse();
    return customers.stream()
        .map(this::convertToCustomerDto)
        .collect(Collectors.toList());
  }

  public Customer getCustomerById(String customerId) {
    Customer customer = customerRepository.findByCustomerIdAndIsDeletedFalse(customerId);
    if (customer == null) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EXIST.getMessage());
    }
    return customer;
  }

  public CustomerDto getCustomerDtoById(String customerId) {
    Customer customer = this.getCustomerById(customerId);
    return this.convertToCustomerDto(customer);
  }

  public CustomerDto updateCustomer(String customerId, CustomerUpdateRequest request) {
    Customer existingCustomer = getCustomerById(customerId);

    if (!existingCustomer.getCustomerName().equals(request.getCustomerName()) &&
        customerRepository.existsByCustomerNameAndIsDeletedFalse(request.getCustomerName())) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_NAME.getMessage());
    }

    if (!existingCustomer.getCustomerEmail().equals(request.getCustomerEmail()) &&
        customerRepository.existsByCustomerEmailAndIsDeletedFalse(request.getCustomerEmail())) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_EMAIL.getMessage());
    }

    if (!existingCustomer.getCustomerPhone().equals(request.getCustomerPhone()) &&
        customerRepository.existsByCustomerPhoneAndIsDeletedFalse(request.getCustomerPhone())) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_PHONE.getMessage());
    }

    existingCustomer.setCustomerName(request.getCustomerName());
    existingCustomer.setCustomerEmail(request.getCustomerEmail());
    existingCustomer.setCustomerPhone(request.getCustomerPhone());

    customerRepository.save(existingCustomer);
    return this.convertToCustomerDto(existingCustomer);
  }

  public void deleteCustomerById(String customerId) {
    Customer existingCustomer = getCustomerById(customerId);
    Account account = accountService.getAccountById(existingCustomer.getAccount().getAccountId());
    account.setDeleted(true);

    List<Booking> bookings = existingCustomer.getBookings();
    for (Booking booking : bookings) {
      booking.setDeleted(true);
    }

    existingCustomer.setDeleted(true);
    customerRepository.save(existingCustomer);
  }

  public ApiPagination<CustomerDto> filterCustomers(String customerName, int page, int pageSize,
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

    Page<Customer> customerPages = customerRepository.searchCustomers(customerName, pageable);
    long count = customerRepository.countCustomers(customerName);

    List<CustomerDto> customerDtos = customerPages.getContent().stream()
        .map(this::convertToCustomerDto)
        .collect(Collectors.toList());

    return ApiPagination.<CustomerDto>builder()
        .result(customerDtos)
        .count(count)
        .build();
  }

  public void updatePasswordByCustomerEmail(UpdatePasswordRequest request) {
    Customer customer = customerRepository.findByCustomerEmailAndIsDeletedFalse(request.getCustomerEmail());
    if (customer == null) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EXIST.getMessage());
    }

    String newPassword = encodePassword(request.getNewPassword());
    accountService.updateAccountPassword(customer.getAccount().getAccountId(), newPassword);
  }

  public String encodePassword(String password) {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
    return passwordEncoder.encode(password);
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

    List<Booking> bookings = bookingRepository.findByCustomerAndIsDeletedFalse(customer);

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

  public CustomerDto getCustomerByCustomerEmail(String customerEmail) {
    Customer customer = customerRepository.findByCustomerEmailAndIsDeletedFalse(customerEmail);

    return this.convertToCustomerDto(customer);
  }

  public Customer createCustomer(CustomerCreationRequest request) {

    if (customerRepository.existsByCustomerPhoneAndIsDeletedFalse(request.getCustomerPhone())) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_PHONE.getMessage());
    }

    if (customerRepository.existsByCustomerEmailAndIsDeletedFalse(request.getCustomerEmail())) {
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
}
