package com.company.project.module.vouchers.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "vouchers")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String voucherId;

    String voucherCode;
    String voucherName;
    String voucherDescription;
    int voucherDiscountPercent;
    LocalDateTime voucherStartedAt;
    LocalDateTime voucherEndedAt;

    @Builder.Default
    boolean isDeleted = false;
}
