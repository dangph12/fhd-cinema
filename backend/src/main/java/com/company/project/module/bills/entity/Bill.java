package com.company.project.module.bills.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.vouchers.entity.Voucher;

import org.hibernate.annotations.CreationTimestamp;

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
@Table(name = "bills")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String billId;

    @Builder.Default
    int billAmount = 0;

    @Builder.Default
    boolean isPaid = false;
    
    @CreationTimestamp
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

    @Builder.Default
    boolean isDeleted = false;
}
