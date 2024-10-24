package com.company.project.module.customers.repository;

import com.company.project.module.customers.entity.Customer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
  boolean existsByCustomerName(String customerName);
  boolean existsByCustomerPhone(String customerPhone);
  boolean existsByCustomerEmail(String customerEmail);
  Customer findByCustomerEmail(String customerEmail);
  Page<Customer> findByCustomerNameContainingIgnoreCase(String customerName, Pageable pageable);
  long countByCustomerNameContainingIgnoreCase(String customerName);
}

