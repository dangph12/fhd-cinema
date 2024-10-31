package com.company.project.module.vouchers.repository;

import com.company.project.module.vouchers.entity.Voucher;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoucherRepository extends JpaRepository<Voucher, String> {
  boolean existsByVoucherName(String voucherName);
  boolean existsByVoucherCode(String voucherCode);
  Page<Voucher> findByVoucherNameContainingIgnoreCase(String voucherName, Pageable pageable);
  long countByVoucherNameContainingIgnoreCase(String voucherName);
}
