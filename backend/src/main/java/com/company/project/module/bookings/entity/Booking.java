package com.company.project.module.bookings.entity;

import com.company.project.module.bills.entity.Bill;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

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

    @JsonIgnore
    @JoinTable(
            name = "bookings_snacks",
            joinColumns = @JoinColumn(name = "booking_id"),
            inverseJoinColumns = @JoinColumn(name = "snack_id"))
    @ManyToMany
    List<Snack> snacks;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="customer_id", referencedColumnName = "customer_id", nullable=false)
    Customer customer;

    @JsonIgnore
    @OneToOne(mappedBy = "booking", optional = false)
    Bill bill;

    @JsonIgnore
    @OneToMany(mappedBy = "booking")
    List<Ticket> tickets;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="showtime_id", nullable=false)
    Showtime showtime;
}
