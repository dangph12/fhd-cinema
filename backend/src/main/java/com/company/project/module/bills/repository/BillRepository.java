package com.company.project.module.bills.repository;

import java.util.List;

import com.company.project.module.bills.entity.Bill;
import com.company.project.module.vouchers.entity.Voucher;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BillRepository extends JpaRepository<Bill, String>{
  boolean existsByBooking_BookingId(String bookingId);
  List<Bill> findByVouchersContaining(Voucher voucher);

  @Query("SELECT b FROM Bill b WHERE " +
         "(:billId IS NULL OR LOWER(b.billId) LIKE LOWER(CONCAT('%', :billId, '%'))) AND " +
         "(:isPaids IS NULL OR b.isPaid IN (:isPaids))")  
  Page<Bill> searchBills(@Param("billId") String billId,
                         @Param("isPaids") List<Boolean> isPaids,
                         Pageable pageable);

  @Query("SELECT COUNT(b) FROM Bill b WHERE " +
         "(:billId IS NULL OR LOWER(b.billId) LIKE LOWER(CONCAT('%', :billId, '%'))) AND " +
         "(:isPaids IS NULL OR b.isPaid IN :isPaids)")
  long countBills(@Param("billId") String billId,
                  @Param("isPaids") List<Boolean> isPaids);

  Page<Bill> findByBillIdContainingIgnoreCase(String billId, Pageable pageable);

}
