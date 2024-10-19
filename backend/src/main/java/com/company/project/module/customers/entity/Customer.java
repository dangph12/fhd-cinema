package com.company.project.module.customers.entity;

import java.util.List;

import com.company.project.module.accounts.entity.Account;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import com.company.project.module.bookings.entity.Booking;

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
@Table(name = "customers")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "customer_id")
    String customerId;

    String customerName;
    String customerPhone;
    String customerEmail;

    @JsonIgnore
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    List<Booking> bookings;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    Account account;

}
