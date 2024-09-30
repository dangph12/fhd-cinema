package com.company.project.module.bills.repository;

import com.company.project.module.bills.entity.Bill;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends JpaRepository<Bill, String>{
  boolean existsByBooking_BookingId(String bookingId);
}
