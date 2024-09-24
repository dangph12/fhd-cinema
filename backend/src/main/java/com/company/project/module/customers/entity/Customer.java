package com.company.project.module.customers.entity;

import com.company.project.module.accounts.entity.Account;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.vouchers.entity.Voucher;
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
    String customerId;

    String customerName;
    String customerEmail;

    @OneToMany(mappedBy = "customer")
    List<Booking> bookings;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    @Builder.Default
    Account account = new Account();

    @JoinTable(
            name = "customers_vouchers",
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "voucher_id"))
    @ManyToMany
    List<Voucher> vouchers;

}
