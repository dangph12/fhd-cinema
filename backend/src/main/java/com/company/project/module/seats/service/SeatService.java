package com.company.project.module.seats.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.service.ScreenService;
import com.company.project.module.seats.common.SeatStatusMessage;
import com.company.project.module.seats.dto.request.SeatCreationRequest;
import com.company.project.module.seats.dto.response.SeatDto;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.seats.exception.SeatException;
import com.company.project.module.seats.repository.SeatRepository;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.seatstypes.service.SeatTypeService;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SeatService {

  private final SeatRepository seatRepository;
  private final ScreenService screenService;
  private final SeatTypeService seatTypeService;
  private final Utils utils;
  private final ModelMapper modelMapper;

  public SeatService(SeatRepository seatRepository, ScreenService screenService,
      SeatTypeService seatTypeService, Utils utils, ModelMapper modelMapper) {
    this.seatRepository = seatRepository;
    this.screenService = screenService;
    this.seatTypeService = seatTypeService;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private SeatDto convertToSeatDto(Seat seat) {
    return modelMapper.map(seat, SeatDto.class);
  }

  public List<SeatDto> getAllSeats() {
    List<Seat> seats = seatRepository.findAllByIsDeletedFalse();
    return seats.stream()
        .map(this::convertToSeatDto)
        .collect(Collectors.toList());
  }

  public Seat getSeatById(String seatId) {
    Seat seat = seatRepository.findBySeatIdAndIsDeletedFalse(seatId);
    if (seat == null) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.NOT_EXIST.getMessage());
    }
    return seat;
  }

  public SeatDto getSeatDtoById(String seatId) {
    Seat seat = this.getSeatById(seatId);
    return this.convertToSeatDto(seat);
  }

  public ApiPagination<SeatDto> filterSeats(String seatName, int page, int pageSize,
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

    List<SeatDto> seatDtos = seatPages.getContent().stream()
        .map(this::convertToSeatDto)
        .collect(Collectors.toList());

    return ApiPagination.<SeatDto>builder()
        .result(seatDtos)
        .count(count)
        .build();
  }

  public SeatDto createSeat(SeatCreationRequest request) {
    SeatType seatType = seatTypeService.getSeatTypeById(request.getSeatTypeId());
    Screen screen = screenService.getScreenById(request.getScreenId());

    Seat seat = Seat.builder()
        .seatName(request.getSeatName())
        .seatType(seatType)
        .screen(screen)
        .isBooked(request.isBooked())
        .build();

    seatRepository.save(seat);
    return this.convertToSeatDto(seat);
  }

  public SeatDto updateSeat(String seatId, SeatCreationRequest request) {
    Seat existedSeat = this.getSeatById(seatId);

    if (!existedSeat.getSeatName().equals(request.getSeatName()) &&
        seatRepository.existsBySeatNameAndIsDeletedFalse(request.getSeatName())) {
      throw new SeatException(Status.FAIL.getValue(), SeatStatusMessage.EXIST_SEAT.getMessage());
    }

    SeatType seatType = seatTypeService.getSeatTypeById(request.getSeatTypeId());
    Screen screen = screenService.getScreenById(request.getScreenId());

    existedSeat.setSeatType(seatType);
    existedSeat.setScreen(screen);
    existedSeat.setBooked(request.isBooked());

    if (!existedSeat.getSeatName().equals(request.getSeatName())) {
      existedSeat.setSeatName(request.getSeatName());
    }

    seatRepository.save(existedSeat);
    return this.convertToSeatDto(existedSeat);
  }

  public void deleteSeatById(String seatId) {
    Seat existedSeat = this.getSeatById(seatId);
    existedSeat.setDeleted(true);
    seatRepository.save(existedSeat);
  }
}
