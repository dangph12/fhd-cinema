package com.company.project.module.seats.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.service.ScreenService;
import com.company.project.module.seats.common.SeatStatusMessage;
import com.company.project.module.seats.dto.request.SeatCreationRequest;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.seats.exception.SeatException;
import com.company.project.module.seats.repository.SeatRepository;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.seatstypes.service.SeatTypeService;
import com.company.project.utils.Utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SeatService {
  
  @Autowired
  private SeatRepository seatRepository;

  @Autowired
  private ScreenService screenService;

  @Autowired
  private SeatTypeService seatTypeService;

  @Autowired
  private Utils utils;

  public List<Seat> getAllSeat() {
    return seatRepository.findAll();
  }
  
  public Seat getSeatById(String seatId) {
    return seatRepository.findById(seatId)
    .orElseThrow(() -> new SeatException(
      Status.FAIL.getValue(), 
      SeatStatusMessage.NOT_EXIST.getMessage()));
  }

  public List<String> getSeatNamesByScreenId(String screenId) {
    Screen screen = screenService.findScreenById(screenId);

    return screen.getSeats()
                 .stream()
                 .map(Seat::getSeatName)
                 .collect(Collectors.toList()); 
  }

  public boolean existSeatNameInScreen(String screenId, String seatName) {
    List<String> existSeatName = this.getSeatNamesByScreenId(screenId);

    return existSeatName.contains(seatName);
  }

  public Seat createSeat(SeatCreationRequest request) {

    if (this.existSeatNameInScreen(request.getScreenId(), request.getSeatName())) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.EXIST_SEAT.getMessage());
    }

    SeatType seatType = seatTypeService.getSeatTypeById(request.getSeatTypeId());
    Screen screen = screenService.findScreenById(request.getScreenId());

    Seat seat = Seat.builder()
      .seatType(seatType)
      .screen(screen)
      .seatName(request.getSeatName())
      .isBooked(request.isBooked())
      .build();

    return seatRepository.save(seat);
  }

  public Seat updateSeat(String seatId, SeatCreationRequest request) {
    if (!seatRepository.existsById(seatId)) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.NOT_EXIST.getMessage());
    }

    Seat existedSeat = this.getSeatById(seatId);

    if (!existedSeat.getSeatName().equals(request.getSeatName()) 
        && this.existSeatNameInScreen(request.getScreenId(), request.getSeatName())) {
        throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.EXIST_SEAT.getMessage());
    }

    SeatType seatType = seatTypeService.getSeatTypeById(request.getSeatTypeId());
    Screen screen = screenService.findScreenById(request.getScreenId());

    existedSeat.setSeatType(seatType);
    existedSeat.setScreen(screen);
    existedSeat.setBooked(request.isBooked());

    if (!existedSeat.getSeatName().equals(request.getSeatName())) {
      existedSeat.setSeatName(request.getSeatName());
    }

    return seatRepository.save(existedSeat);
  }

  public void deleteSeatById(String seatId) {
    if (!seatRepository.existsById(seatId)) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.NOT_EXIST.getMessage());
    }

    seatRepository.deleteById(seatId);
  }

  public ApiPagination<Seat> filterSeats(String seatName, int page, int pageSize,
        List<String> seatTypes, String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> seatFieldNames = utils.getEntityFields(Seat.class);

    if (!seatFieldNames.contains(sortBy)) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);

    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Seat> seatPages = seatRepository.searchSeats(seatName, seatTypes, pageable);
    long count = seatRepository.countSeats(seatName, seatTypes);

    ApiPagination<Seat> seatPagination = ApiPagination.<Seat>builder()
        .result(seatPages.getContent())
        .count(count)
        .build();
    
    return seatPagination;
  }

}

