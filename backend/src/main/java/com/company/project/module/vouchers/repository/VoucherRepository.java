package com.company.project.module.vouchers.repository;

import com.company.project.module.vouchers.entity.Voucher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoucherRepository extends JpaRepository<Voucher, String> {
  boolean existsByVoucherName(String voucherName);
  boolean existsByVoucherCode(String voucherCode);
}
