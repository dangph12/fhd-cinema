package com.company.project.module.seats.repository;

import java.util.List;

import com.company.project.module.seats.entity.Seat;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends JpaRepository<Seat, String> {
  boolean existsBySeatIdAndIsDeletedFalse(String seatName);

  boolean existsBySeatNameAndIsDeletedFalse(String seatName);

  List<Seat> findAllByIsDeletedFalse();

  Seat findBySeatIdAndIsDeletedFalse(String seatId);

  @Query("SELECT s FROM Seat s WHERE " +
      "s.isDeleted = false AND " +
      "(:seatName IS NULL OR LOWER(s.seatName) LIKE LOWER(CONCAT('%', :seatName, '%'))) AND " +
      "(:seatTypes IS NULL OR (s.seatType.isDeleted = false AND s.seatType.seatTypeName IN :seatTypes))")
  Page<Seat> searchSeats(@Param("seatName") String seatName,
      @Param("seatTypes") List<String> seatTypes,
      Pageable pageable);

  @Query("SELECT COUNT(s) FROM Seat s WHERE " +
      "s.isDeleted = false AND " +
      "(:seatName IS NULL OR LOWER(s.seatName) LIKE LOWER(CONCAT('%', :seatName, '%'))) AND " +
      "(:seatTypes IS NULL OR (s.seatType.isDeleted = false AND s.seatType.seatTypeName IN :seatTypes))")
  long countSeats(@Param("seatName") String seatName,
      @Param("seatTypes") List<String> seatTypes);

}
