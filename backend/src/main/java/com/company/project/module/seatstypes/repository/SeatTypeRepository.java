package com.company.project.module.seatstypes.repository;

import java.util.List;

import com.company.project.module.seatstypes.entity.SeatType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatTypeRepository extends JpaRepository<SeatType, String> {
  boolean existsBySeatTypeNameAndIsDeletedFalse(String seatTypeName);

  List<SeatType> findAllByIsDeletedFalse();

  SeatType findBySeatTypeIdAndIsDeletedFalse(String seatTypeId);

  Page<SeatType> findBySeatTypeNameContainingIgnoreCaseAndIsDeletedFalse(String seatTypeName, Pageable pageable);

  long countBySeatTypeNameContainingIgnoreCaseAndIsDeletedFalse(String seatTypeName);
}
