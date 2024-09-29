package com.company.project.module.seats.repository;

import com.company.project.module.seats.entity.Seat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends JpaRepository<Seat, String> {
  boolean existsBySeatName(String seatName);
}
