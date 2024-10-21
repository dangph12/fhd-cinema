package com.company.project.module.seatstypes.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.seatstypes.common.SeatTypeStatusMessage;
import com.company.project.module.seatstypes.dto.request.SeatTypeCreationRequest;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.seatstypes.exception.SeatTypeException;
import com.company.project.module.seatstypes.repository.SeatTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SeatTypeService {
  
  @Autowired
  private SeatTypeRepository seatTypeRepository;

  public List<SeatType> getAllSeatType() {
    return seatTypeRepository.findAll();
  }
  
  public SeatType getSeatTypeById(String seatTypeId) {
    return seatTypeRepository.findById(seatTypeId)
    .orElseThrow(() -> new SeatTypeException(
      Status.FAIL.getValue(), 
      SeatTypeStatusMessage.NOT_EXIST.getMessage()));
  }

  public SeatType createSeatType(SeatTypeCreationRequest request) {
    if (seatTypeRepository.existsBySeatTypeName(request.getSeatTypeName())) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.EXIST_TYPE.getMessage());
    }

    SeatType seatType = SeatType.builder()
      .seatTypeName(request.getSeatTypeName())
      .seatTypePrice(request.getSeatTypePrice())
      .build();

    return seatTypeRepository.save(seatType);
  }

  public SeatType updateSeatType(String seatTypeId, SeatTypeCreationRequest request) {
    if (!seatTypeRepository.existsById(seatTypeId)) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.NOT_EXIST.getMessage());
    }

    if (seatTypeRepository.existsBySeatTypeName(request.getSeatTypeName())) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.EXIST_TYPE.getMessage());
    }

    SeatType existedSeatType = this.getSeatTypeById(seatTypeId);

    existedSeatType.setSeatTypeName(request.getSeatTypeName());
    existedSeatType.setSeatTypePrice(request.getSeatTypePrice());

    return seatTypeRepository.save(existedSeatType);
  }

  public void deleteSeatTypeById(String seatTypeId) {
    if (!seatTypeRepository.existsById(seatTypeId)) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.NOT_EXIST.getMessage());
    }

    seatTypeRepository.deleteById(seatTypeId);
  }

  public ApiPagination<SeatType> filterSeatTypes(String seatTypeName, int page, int pageSize,
        String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new SeatTypeException(Status.FAIL.getValue(), SeatTypeStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);

    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<SeatType> seatTypePages = seatTypeRepository.findBySeatTypeNameContainingIgnoreCase(seatTypeName, pageable);
    long count = seatTypeRepository.countBySeatTypeNameContainingIgnoreCase(seatTypeName);

    ApiPagination<SeatType> seatTypePagination = ApiPagination.<SeatType>builder()
        .result(seatTypePages.getContent())
        .count(count)
        .build();
    
    return seatTypePagination;
  }

}
