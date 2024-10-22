package com.company.project.module.seatstypes.repository;

import com.company.project.module.seatstypes.entity.SeatType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatTypeRepository extends JpaRepository<SeatType, String> {
  boolean existsBySeatTypeName(String seatTypeName);
  Page<SeatType> findBySeatTypeNameContainingIgnoreCase(String seatTypeName, Pageable pageable);
  long countBySeatTypeNameContainingIgnoreCase(String seatTypeName);
}
