package com.company.project.module.customers.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.customers.common.CustomerStatusMessage;
import com.company.project.module.customers.dto.request.CustomerCreationRequest;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.exception.CustomerException;
import com.company.project.module.customers.repository.CustomerRepository;
import com.company.project.module.vouchers.entity.Voucher;
import com.company.project.module.vouchers.service.VoucherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

  @Autowired
  private CustomerRepository customerRepository;

  @Autowired
  @Lazy
  private VoucherService voucherService;

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

    Customer customer = Customer.builder()
      .customerName(request.getCustomerName())
      .customerPhone(request.getCustomerPhone())
      .customerEmail(request.getCustomerEmail())
      .build();

    return customerRepository.save(customer);
  }

  public Customer updateCustomer(String customerId, CustomerCreationRequest request) {
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

  public Customer removeVoucherFromCustomer(String customerId, String voucherId) {
    Customer customer = this.getCustomerById(customerId);
    Voucher voucher = voucherService.getVoucherById(voucherId);

    customer.getVouchers().remove(voucher);
    return customerRepository.save(customer);
  }

  public void removeVoucherFromAllCustomer(Voucher voucher) {
    List<Customer> customersWithVoucher = customerRepository.findByVouchersContaining(voucher);
    for (Customer customer : customersWithVoucher) {
      customer.getVouchers().remove(voucher);
      customerRepository.save(customer);
    }
  }

  public Customer addVoucherToCustomer(String customerId, String voucherId) {
    Voucher voucher = voucherService.getVoucherById(voucherId);

    Customer customer = this.getCustomerById(customerId);

    if (!customer.getVouchers().contains(voucher)) {
      customer.getVouchers().add(voucher);
      customerRepository.save(customer);
    } else {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.EXIST_VOUCHER.getMessage());
    }

    return customer;
  }

}


