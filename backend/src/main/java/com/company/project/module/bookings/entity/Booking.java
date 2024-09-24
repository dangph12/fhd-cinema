package com.company.project.module.bookings.entity;

import com.company.project.module.bills.entity.Bill;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;
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

    @JoinTable(
            name = "bookings_snacks",
            joinColumns = @JoinColumn(name = "booking_id"),
            inverseJoinColumns = @JoinColumn(name = "snack_id"))
    @ManyToMany
    List<Snack> snacks;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    Customer customer;

    @OneToOne(mappedBy = "booking", optional = false)
    Bill bill;

    @OneToMany(mappedBy = "booking")
    List<Ticket> tickets;

    @ManyToOne
    @JoinColumn(name="showtime_id", nullable=false)
    Showtime showtime;
}
