package com.company.project.module.seats.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.seats.common.SeatStatusMessage;
import com.company.project.module.seats.dto.request.SeatCreationRequest;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.seats.exception.SeatException;
import com.company.project.module.seats.repository.SeatRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService {
  
  @Autowired
  private SeatRepository seatRepository;

  public List<Seat> getAllSeat() {
    return seatRepository.findAll();
  }
  
  public Seat getSeatById(String seatTypeId) {
    return seatRepository.findById(seatTypeId)
    .orElseThrow(() -> new SeatException(
      Status.FAIL.getValue(), 
      SeatStatusMessage.NOT_EXIST.getMessage()));
  }
  public Seat createSeat(SeatCreationRequest request) {
    if (seatRepository.existsBySeatName(request.getSeatName())) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.EXIST_SEAT.getMessage());
    }

    Seat seat = Seat.builder().seatName(request.getSeatName()).build();

    return seatRepository.save(seat);
  }

/**
  public Seat updateSeat(String seatId, SeatCreationRequest request) {
    if (!seatRepository.existsById(seatId)) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.NOT_EXIST.getMessage());
    }

    if (seatRepository.exitsBySeatName(request.getSeatName())) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.EXIST_SEAT.getMessage());
    }

    Seat existedSeat = this.getSeatById(seatId);

    existedSeat.setSeatName(request.getSeatName());

    return seatRepository.save(existedSeat);
  }

  public void deleteSeatById(String seatId) {
    if (!seatRepository.existsById(seatId)) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.NOT_EXIST.getMessage());
    }

    seatRepository.deleteById(seatId);
  }
**/
}

