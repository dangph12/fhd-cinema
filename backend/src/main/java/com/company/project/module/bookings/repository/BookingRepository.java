package com.company.project.module.bookings.repository;

import java.util.List;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.snacks.entity.Snack;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, String> {
  List<Booking> findBySnacksContaining(Snack snack);
  List<Booking> findByShowtime(Showtime showtime);
  List<Booking> findByCustomer(Customer customer);
  Page<Booking> findByBookingIdContainingIgnoreCase(String bookingId, Pageable pageable);
  long countByBookingIdContainingIgnoreCase(String bookingId);
}

