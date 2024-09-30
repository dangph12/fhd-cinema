package com.company.project.module.vouchers.entity;

import com.company.project.module.bills.entity.Bill;
import com.company.project.module.customers.entity.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

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
    Date voucherStartedAt;
    Date voucherEndedAt;

}
