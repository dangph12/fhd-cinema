package com.company.project.module.bills.repository;

import java.util.List;

import com.company.project.module.bills.entity.Bill;
import com.company.project.module.vouchers.entity.Voucher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends JpaRepository<Bill, String>{
  boolean existsByBooking_BookingId(String bookingId);
  List<Bill> findByVouchersContaining(Voucher voucher);
}
