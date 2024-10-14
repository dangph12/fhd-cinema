package com.company.project.module.customers.repository;

import java.util.List;

import com.company.project.module.customers.entity.Customer;
import com.company.project.module.vouchers.entity.Voucher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
  boolean existsByCustomerName(String customerName);
  boolean existsByCustomerPhone(String customerPhone);
  boolean existsByCustomerEmail(String customerEmail);
  List<Customer> findByVouchersContaining(Voucher voucher);
  Customer findByCustomerEmail(String customerEmail);
}

