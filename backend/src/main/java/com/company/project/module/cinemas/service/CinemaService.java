package com.company.project.module.cinemas.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.cinemas.common.CinemaStatusMessage;
import com.company.project.module.cinemas.dto.request.CinemaCreationRequest;
import com.company.project.module.cinemas.dto.request.CinemaUpdateRequest;
import com.company.project.module.cinemas.dto.response.CinemaDto;
import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.cinemas.exception.CinemaException;
import com.company.project.module.cinemas.repository.CinemaRepository;
import com.company.project.module.locations.common.LocationStatusMessage;
import com.company.project.module.locations.entity.Location;
import com.company.project.module.locations.repository.LocationRepository;
import com.company.project.module.locations.service.LocationService;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CinemaService {

  private final CinemaRepository cinemaRepository;
  private final LocationRepository locationRepository;
  private final Utils utils;
  private final ModelMapper modelMapper;
  private final LocationService locationService;

  public CinemaService(CinemaRepository cinemaRepository, LocationRepository locationRepository, Utils utils,
      ModelMapper modelMapper, LocationService locationService) {
    this.cinemaRepository = cinemaRepository;
    this.locationRepository = locationRepository;
    this.utils = utils;
    this.modelMapper = modelMapper;
    this.locationService = locationService;
  }

  private CinemaDto convertToCinemaDto(Cinema cinema) {
    return modelMapper.map(cinema, CinemaDto.class);
  }

  public List<CinemaDto> findAllCinemas() {
    List<Cinema> cinemas = cinemaRepository.findAllByIsDeletedFalseAndLocation_IsDeletedFalse();
    return cinemas.stream()
        .map(this::convertToCinemaDto)
        .collect(Collectors.toList());
  }

  public Cinema getCinemaById(String cinemaId) {
    Cinema cinema = cinemaRepository.findByCinemaIdAndIsDeletedFalseAndLocation_IsDeletedFalse(cinemaId);
    if (cinema == null) {
      throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.NOT_EXIST.getMessage());
    }
    return cinema;
  }

  public CinemaDto getCinemaDtoById(String cinemaId) {
    Cinema cinema = this.getCinemaById(cinemaId);
    return this.convertToCinemaDto(cinema);
  }

  public ApiPagination<CinemaDto> filterCinemas(String cinemaName, int page, int pageSize, String sortBy,
      String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> cinemaFieldNames = utils.getEntityFields(Cinema.class);
    if (!cinemaFieldNames.contains(sortBy)) {
      throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);
    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Cinema> cinemaPages = cinemaRepository.findByCinemaNameContainingIgnoreCaseAndIsDeletedFalseAndLocation_IsDeletedFalse(cinemaName,
        pageable);
    long count = cinemaRepository.countByCinemaNameContainingIgnoreCaseAndIsDeletedFalseAndLocation_IsDeletedFalse(cinemaName);

    List<CinemaDto> cinemaDtos = cinemaPages.getContent().stream()
        .map(this::convertToCinemaDto)
        .collect(Collectors.toList());

    return ApiPagination.<CinemaDto>builder()
        .result(cinemaDtos)
        .count(count)
        .build();
  }

  public CinemaDto addCinema(CinemaCreationRequest request) {
    if (cinemaRepository.existsByCinemaNameAndIsDeletedFalse(request.getCinemaName())) {
      throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.CINEMA_EXIST.getMessage());
    }

    Location location = locationService.create(request.getLocationName());

    Cinema cinema = Cinema.builder()
        .location(location)
        .cinemaName(request.getCinemaName())
        .build();

    cinemaRepository.save(cinema);
    return this.convertToCinemaDto(cinema);
  }

  public CinemaDto updateCinema(String cinemaId, CinemaUpdateRequest request) {
    Cinema existedCinema = this.getCinemaById(cinemaId);

    if (!existedCinema.getCinemaName().equals(request.getCinemaName()) &&
        cinemaRepository.existsByCinemaNameAndIsDeletedFalse(request.getCinemaName())) {
      throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.CINEMA_EXIST.getMessage());
    }

    Location location = locationRepository.findById(request.getLocationId())
        .orElseThrow(() -> new CinemaException(Status.FAIL.getValue(), LocationStatusMessage.LOCATION_EXIST.getMessage()));

    existedCinema.setLocation(location);

    if (!existedCinema.getCinemaName().equals(request.getCinemaName())) {
      existedCinema.setCinemaName(request.getCinemaName());
    }

    cinemaRepository.save(existedCinema);
    return this.convertToCinemaDto(existedCinema);
  }

  @Transactional
  public void deleteCinema(String cinemaId) {
    Cinema existedCinema = this.getCinemaById(cinemaId);

    existedCinema.getScreens().forEach(screen -> {
      screen.setDeleted(true);
    });
    existedCinema.setDeleted(true);
    cinemaRepository.save(existedCinema);
  }
}
