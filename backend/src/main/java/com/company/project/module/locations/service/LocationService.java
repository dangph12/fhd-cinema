package com.company.project.module.locations.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.locations.common.LocationStatusMessage;
import com.company.project.module.locations.dto.request.LocationCreationRequest;
import com.company.project.module.locations.entity.Location;
import com.company.project.module.locations.exception.LocationException;
import com.company.project.module.locations.repository.LocationRepository;
import com.company.project.utils.Utils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    private final LocationRepository locationRepository;

    private final Utils utils;

    public LocationService(LocationRepository locationRepository, Utils utils) {
        this.locationRepository = locationRepository;
        this.utils = utils;
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

    public ApiPagination<Location> filterLocations(String locationName, int page, int pageSize,
          String sortBy, String sortDirection) {
      if (page < 1 || pageSize < 1) {
        throw new LocationException(Status.FAIL.getValue(), LocationStatusMessage.LESS_THAN_ZERO.getMessage());
      }

      List<String> locationFieldNames = utils.getEntityFields(Location.class);

      if (!locationFieldNames.contains(sortBy)) {
        throw new LocationException(Status.FAIL.getValue(), LocationStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
      }

      Sort.Direction direction = Sort.Direction.fromString(sortDirection);

      Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

      Page<Location> locationPages = locationRepository.findByLocationNameContainingIgnoreCase(locationName, pageable);
      long count = locationRepository.countByLocationNameContainingIgnoreCase(locationName);

      ApiPagination<Location> locationPagination = ApiPagination.<Location>builder()
          .result(locationPages.getContent())
          .count(count)
          .build();
      
      return locationPagination;
    }

}
