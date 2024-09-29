package com.company.project.module.bookings.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import com.company.project.module.bills.entity.Bill;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name = "bookings")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "booking_id")
    String bookingId;

    int bookingPrice;
    @CreationTimestamp
    LocalDateTime bookingCreateAt;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "bookings_snacks",
            joinColumns = @JoinColumn(name = "booking_id"),
            inverseJoinColumns = @JoinColumn(name = "snack_id"))
    List<Snack> snacks;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="customer_id", referencedColumnName = "customer_id", nullable=false)
    Customer customer;

    @JsonIgnore
    @OneToOne(mappedBy = "booking", optional = false)
    Bill bill;

    @OneToMany(mappedBy = "booking")
    List<Ticket> tickets;

    @ManyToOne
    @JoinColumn(name="showtime_id", nullable=false)
    Showtime showtime;
}
