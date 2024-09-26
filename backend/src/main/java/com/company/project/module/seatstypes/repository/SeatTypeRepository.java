package com.company.project.module.seatstypes.repository;

import com.company.project.module.seatstypes.entity.SeatType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatTypeRepository extends JpaRepository<SeatType, String> {
}
