package com.company.project.module.locations.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.locations.common.LocationStatusMessage;
import com.company.project.module.locations.dto.request.LocationCreationRequest;
import com.company.project.module.locations.entity.Location;
import com.company.project.module.locations.service.LocationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Location>>> getAllLocations() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<Location>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(LocationStatusMessage.GET_SUCCESS.getMessage())
                        .data(locationService.findAll())
                        .build());
    }

    @GetMapping("/{locationId}")
    ResponseEntity<ApiResponse<Location>> getLocationById(@PathVariable(name = "locationId") String locationId) {
        Location location = locationService.findByLocationId(locationId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Location>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(LocationStatusMessage.GET_SUCCESS.getMessage())
                        .data(location)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<Location>> addLocation(@RequestBody @Valid LocationCreationRequest request) {
        Location location = locationService.create(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Location>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(LocationStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(location)
                        .build());
    }

    @PutMapping("/{locationId}")
    ResponseEntity<ApiResponse<Location>> updateLocation(@PathVariable(name = "locationId") String locationId, @RequestBody @Valid LocationCreationRequest request) {
        Location location = locationService.update(locationId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Location>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(LocationStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(location)
                        .build());
    }

    @DeleteMapping("/{locationId}")
    ResponseEntity<ApiResponse<Void>> deleteLocation(@PathVariable(name = "locationId") String locationId) {
        locationService.delete(locationId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(LocationStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
