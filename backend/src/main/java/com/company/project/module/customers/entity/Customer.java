package com.company.project.module.customers.entity;

import com.company.project.module.accounts.entity.Account;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.vouchers.entity.Voucher;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "customers")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "customer_id")
    String customerId;

    String customerName;
    String customerEmail;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    Account account;

    @JoinTable(
            name = "customers_vouchers",
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "voucher_id"))
    @ManyToMany
    List<Voucher> vouchers;

    @OneToMany(mappedBy = "customer")
    List<Booking> bookings;

}
