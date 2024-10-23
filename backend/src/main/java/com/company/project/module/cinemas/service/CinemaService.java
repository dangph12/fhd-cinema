package com.company.project.module.cinemas.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.cinemas.common.CinemaStatusMessage;
import com.company.project.module.cinemas.dto.request.CinemaCreationRequest;
import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.cinemas.exception.CinemaException;
import com.company.project.module.cinemas.repository.CinemaRepository;
import com.company.project.module.locations.entity.Location;
import com.company.project.module.locations.repository.LocationRepository;
import com.company.project.utils.Utils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CinemaService {

    private final CinemaRepository cinemaRepository;
    private final LocationRepository locationRepository;
    private final Utils utils;

    public CinemaService(CinemaRepository cinemaRepository, LocationRepository locationRepository, Utils utils) {
        this.cinemaRepository = cinemaRepository;
        this.locationRepository = locationRepository;
        this.utils = utils;
    }

    public List<Cinema> findAll() {
        return cinemaRepository.findAll();
    }

    public Cinema findByCinemaId(String cinemaId) {
        return cinemaRepository.findById(cinemaId).orElseThrow(() -> new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.NOT_EXIST.getMessage()));
    }

    public Cinema addCinema(CinemaCreationRequest request) {
        if(cinemaRepository.existsByCinemaName(request.getCinemaName())) {
           throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.CINEMA_EXIST.getMessage());
        }

        Location location = locationRepository.findById(request.getLocationId())
                .orElseThrow(() -> new CinemaException(Status.FAIL.getValue(), "Invalid Location ID"));

        Cinema cinema = Cinema.builder()
                .location(location)
                .cinemaName(request.getCinemaName())
                .build();

        return cinemaRepository.save(cinema);
    }

    public Cinema updateCinema(String cinemaId, CinemaCreationRequest request) {
        Cinema existCinema = findByCinemaId(cinemaId);

        Location location = locationRepository.findById(request.getLocationId())
                .orElseThrow(() -> new CinemaException(Status.FAIL.getValue(), "Invalid Location ID"));

        existCinema.setLocation(location);
        existCinema.setCinemaName(request.getCinemaName());

        return cinemaRepository.save(existCinema);
    }

    public void deleteCinema(String cinemaId) {
        if(!cinemaRepository.existsByCinemaId(cinemaId)) {
            throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.NOT_EXIST.getMessage());
        }

        cinemaRepository.deleteById(cinemaId);
    }

    public ApiPagination<Cinema> filterCinemas(String cinemaName, int page, int pageSize,
          String sortBy, String sortDirection) {
      if (page < 1 || pageSize < 1) {
        throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.LESS_THAN_ZERO.getMessage());
      }

      List<String> cinemaFieldNames = utils.getEntityFields(Cinema.class);

      if (!cinemaFieldNames.contains(sortBy)) {
        throw new CinemaException(Status.FAIL.getValue(), CinemaStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
      }

      Sort.Direction direction = Sort.Direction.fromString(sortDirection);

      Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

      Page<Cinema> cinemaPages = cinemaRepository.findByCinemaNameContainingIgnoreCase(cinemaName, pageable);
      long count = cinemaRepository.countByCinemaNameContainingIgnoreCase(cinemaName);

      ApiPagination<Cinema> cinemaPagination = ApiPagination.<Cinema>builder()
          .result(cinemaPages.getContent())
          .count(count)
          .build();
      
      return cinemaPagination;
    }

}
