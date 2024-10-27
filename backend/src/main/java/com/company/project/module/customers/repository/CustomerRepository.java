package com.company.project.module.customers.repository;

import java.util.List;

import com.company.project.module.customers.entity.Customer;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {

  boolean existsByCustomerIdAndIsDeletedFalse(String customerId);

  boolean existsByCustomerNameAndIsDeletedFalse(String customerName);

  boolean existsByCustomerPhoneAndIsDeletedFalse(String customerPhone);

  boolean existsByCustomerEmailAndIsDeletedFalse(String customerEmail);

  Customer findByCustomerIdAndIsDeletedFalse(String customerId);

  Customer findByCustomerEmailAndIsDeletedFalse(String customerEmail);

  List<Customer> findAllByIsDeletedFalse();

  @Query("SELECT c FROM Customer c WHERE " +
      "c.isDeleted = false AND " +
      "(:customerName IS NULL OR LOWER(c.customerName) LIKE LOWER(CONCAT('%', :customerName, '%')))" ) 
  Page<Customer> searchCustomers(@Param("customerName") String customerName,
                                 Pageable pageable);

  @Query("SELECT COUNT(c) FROM Customer c WHERE " +
      "c.isDeleted = false AND " +
      "(:customerName IS NULL OR LOWER(c.customerName) LIKE LOWER(CONCAT('%', :customerName, '%')))" ) 
  long countCustomers(@Param("customerName") String customerName);
}
