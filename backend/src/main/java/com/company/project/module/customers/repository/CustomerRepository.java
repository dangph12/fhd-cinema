package com.company.project.module.customers.repository;

import com.company.project.module.customers.entity.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
  boolean existsByCustomerName(String customerName);
}

