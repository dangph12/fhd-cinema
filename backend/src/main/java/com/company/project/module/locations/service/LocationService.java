package com.company.project.module.locations.service;

import com.company.project.common.Status;
import com.company.project.module.locations.common.LocationStatusMessage;
import com.company.project.module.locations.dto.request.LocationCreationRequest;
import com.company.project.module.locations.entity.Location;
import com.company.project.module.locations.exception.LocationException;
import com.company.project.module.locations.repository.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public List<Location> findAll() {
        return locationRepository.findAll();
    }

    public Location findByLocationId(String locationId) {
        return locationRepository.findById(locationId).orElseThrow(() -> new LocationException(Status.FAIL.getValue(), LocationStatusMessage.NOT_EXIST.getMessage()));
    }

    public Location create(LocationCreationRequest request) {
        if(locationRepository.existsByLocationName(request.getLocationName())) {
            throw new LocationException(Status.FAIL.getValue(), LocationStatusMessage.LOCATION_EXIST.getMessage());
        }

        Location location = Location.builder()
                .locationName(request.getLocationName())
                .build();

        return locationRepository.save(location);
    }

    public Location update(String locationId, LocationCreationRequest request) {
        Location location = findByLocationId(locationId);

        location.setLocationName(request.getLocationName());

        return locationRepository.save(location);
    }

    public void delete(String locationId) {
        if(!locationRepository.existsByLocationId(locationId)) {
            throw new LocationException(Status.FAIL.getValue(), LocationStatusMessage.NOT_EXIST.getMessage());
        }

        locationRepository.deleteById(locationId);
    }

}
