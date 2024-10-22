package com.company.project.module.locations.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.locations.common.LocationStatusMessage;
import com.company.project.module.locations.dto.request.LocationCreationRequest;
import com.company.project.module.locations.entity.Location;
import com.company.project.module.locations.service.LocationService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<Location>>> filterLocations(
        @RequestParam(value = "search") String search,
        @RequestParam(value = "page", defaultValue = "1") int page,
        @RequestParam(value = "sortBy", defaultValue = "locationName") String sortBy, 
        @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
        @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
      return ResponseEntity.ok().body(ApiResponse.<ApiPagination<Location>>builder()
              .status(Status.SUCCESS.getValue())
              .message(LocationStatusMessage.GET_SUCCESS.getMessage())
              .data(locationService.filterLocations(search, page, pageSize, sortBy, sortDirection))
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
