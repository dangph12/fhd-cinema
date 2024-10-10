package com.company.project.module.bookings.repository;

import java.util.List;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.snacks.entity.Snack;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, String> {
  List<Booking> findBySnacksContaining(Snack snack);
  List<Booking> findByShowtime(Showtime showtime);
}

