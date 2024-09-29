package com.company.project.module.bills.entity;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.vouchers.entity.Voucher;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "bills")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String billId;

    int billAmount;
    boolean isPaid;
    LocalDateTime billCreatedAt;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "booking_id", referencedColumnName = "booking_id")
    Booking booking;

    @JoinTable(
            name = "bills_vouchers",
            joinColumns = @JoinColumn(name = "bill_id"),
            inverseJoinColumns = @JoinColumn(name = "voucher_id"))
    @ManyToMany
    List<Voucher> vouchers;
}
