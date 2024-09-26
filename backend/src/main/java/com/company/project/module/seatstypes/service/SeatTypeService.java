package com.company.project.module.seatstypes.service;

import java.util.List;

import com.company.project.module.seatstypes.dto.request.SeatTypeCreationRequest;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.seatstypes.repository.SeatTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class SeatTypeService {
  
  @Autowired
  private SeatTypeRepository seatTypeRepository;

  public List<SeatType> getAllSeatType() {
    return seatTypeRepository.findAll();
  }

  public SeatType createSeatType(SeatTypeCreationRequest request) {
    SeatType seatType = SeatType.builder()
      .seatTypeName(request.getSeatTypeName())
      .seatTypePrice(request.getSeatTypePrice())
      .build();

    return seatTypeRepository.save(seatType);
  }

}
