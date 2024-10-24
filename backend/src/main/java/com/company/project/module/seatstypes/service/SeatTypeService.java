package com.company.project.module.seatstypes.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.seatstypes.common.SeatTypeStatusMessage;
import com.company.project.module.seatstypes.dto.request.SeatTypeCreationRequest;
import com.company.project.module.seatstypes.dto.response.SeatTypeDto;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.seatstypes.exception.SeatTypeException;
import com.company.project.module.seatstypes.repository.SeatTypeRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SeatTypeService {

  private final SeatTypeRepository seatTypeRepository;
  private final Utils utils;
  private final ModelMapper modelMapper;

  public SeatTypeService(SeatTypeRepository seatTypeRepository, Utils utils, ModelMapper modelMapper) {
    this.seatTypeRepository = seatTypeRepository;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private SeatTypeDto convertToSeatTypeDto(SeatType seatType) {
    return modelMapper.map(seatType, SeatTypeDto.class);
  }

  public List<SeatTypeDto> getAllSeatTypes() {
    List<SeatType> seatTypes = seatTypeRepository.findAllByIsDeletedFalse();
    return seatTypes.stream()
        .map(this::convertToSeatTypeDto)
        .collect(Collectors.toList());
  }

  public SeatType getSeatTypeById(String seatTypeId) {
    SeatType seatType = seatTypeRepository.findBySeatTypeIdAndIsDeletedFalse(seatTypeId);
    if (seatType == null) {
      throw new SeatTypeException(
          Status.FAIL.getValue(),
          SeatTypeStatusMessage.NOT_EXIST.getMessage());
    }
    return seatType;
  }

  public SeatTypeDto getSeatTypeDtoById(String seatTypeId) {
    SeatType seatType = this.getSeatTypeById(seatTypeId);
    return this.convertToSeatTypeDto(seatType);
  }

  public SeatTypeDto createSeatType(SeatTypeCreationRequest request) {
    if (seatTypeRepository.existsBySeatTypeNameAndIsDeletedFalse(request.getSeatTypeName())) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.EXIST_TYPE.getMessage());
    }

    SeatType seatType = SeatType.builder()
        .seatTypeName(request.getSeatTypeName())
        .seatTypePrice(request.getSeatTypePrice())
        .build();

    seatTypeRepository.save(seatType);
    return this.convertToSeatTypeDto(seatType);
  }

  public SeatTypeDto updateSeatType(String seatTypeId, SeatTypeCreationRequest request) {
    SeatType existedSeatType = this.getSeatTypeById(seatTypeId);

    if (!existedSeatType.getSeatTypeName().equals(request.getSeatTypeName()) &&
        seatTypeRepository.existsBySeatTypeNameAndIsDeletedFalse(request.getSeatTypeName())) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.EXIST_TYPE.getMessage());
    }

    existedSeatType.setSeatTypePrice(request.getSeatTypePrice());

    if (!existedSeatType.getSeatTypeName().equals(request.getSeatTypeName())) {
      existedSeatType.setSeatTypeName(request.getSeatTypeName());
    }

    seatTypeRepository.save(existedSeatType);
    return this.convertToSeatTypeDto(existedSeatType);
  }

  public void deleteSeatTypeById(String seatTypeId) {
    SeatType existedSeatType = this.getSeatTypeById(seatTypeId);

    existedSeatType.getSeats().forEach(seat -> {
      seat.setDeleted(true);
    });
    existedSeatType.setDeleted(true);
    seatTypeRepository.save(existedSeatType);
  }

  public ApiPagination<SeatTypeDto> filterSeatTypes(String seatTypeName, int page, int pageSize,
      String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> seatTypeFieldNames = utils.getEntityFields(SeatType.class);

    if (!seatTypeFieldNames.contains(sortBy)) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);

    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<SeatType> seatTypePages = seatTypeRepository
        .findBySeatTypeNameContainingIgnoreCaseAndIsDeletedFalse(seatTypeName, pageable);
    long count = seatTypeRepository.countBySeatTypeNameContainingIgnoreCaseAndIsDeletedFalse(seatTypeName);

    List<SeatTypeDto> seatTypeDtos = seatTypePages.getContent().stream()
        .map(this::convertToSeatTypeDto)
        .collect(Collectors.toList());

    return ApiPagination.<SeatTypeDto>builder()
        .result(seatTypeDtos)
        .count(count)
        .build();
  }
}
