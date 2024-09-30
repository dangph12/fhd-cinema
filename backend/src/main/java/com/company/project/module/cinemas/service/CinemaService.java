package com.company.project.module.cinemas.service;

import com.company.project.common.Status;
import com.company.project.module.cinemas.common.CinemaStatusMessage;
import com.company.project.module.cinemas.dto.request.CinemaCreationRequest;
import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.cinemas.exception.CinemaException;
import com.company.project.module.cinemas.repository.CinemaRepository;
import com.company.project.module.locations.entity.Location;
import com.company.project.module.locations.repository.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CinemaService {

    private final CinemaRepository cinemaRepository;
    private final LocationRepository locationRepository;

    public CinemaService(CinemaRepository cinemaRepository, LocationRepository locationRepository) {
        this.cinemaRepository = cinemaRepository;
        this.locationRepository = locationRepository;
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

}
