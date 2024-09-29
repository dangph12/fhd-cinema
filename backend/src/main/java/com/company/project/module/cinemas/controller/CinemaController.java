package com.company.project.module.cinemas.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.cinemas.common.CinemaStatusMessage;
import com.company.project.module.cinemas.dto.request.CinemaCreationRequest;
import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.cinemas.service.CinemaService;
import com.company.project.module.locations.service.LocationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cinemas")
public class CinemaController {

    private final CinemaService cinemaService;

    public CinemaController(CinemaService cinemaService) {
        this.cinemaService = cinemaService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Cinema>>> getAllCinemas() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<Cinema>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.GET_SUCCESS.getMessage())
                        .data(cinemaService.findAll())
                        .build());
    }

    @GetMapping("/{cinemaId}")
    ResponseEntity<ApiResponse<Cinema>> getCinemaById(@PathVariable(name = "cinemaId") String cinemaId) {
        Cinema cinema = cinemaService.findByCinemaId(cinemaId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Cinema>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.GET_SUCCESS.getMessage())
                        .data(cinema)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<Cinema>> addCinema(@RequestBody @Valid CinemaCreationRequest request) {
        Cinema cinema = cinemaService.addCinema(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Cinema>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(cinema)
                        .build());
    }

    @PutMapping("/{cinemaId}")
    ResponseEntity<ApiResponse<Cinema>> updateCinema(@PathVariable(name = "cinemaId") String cinemaId, @RequestBody @Valid CinemaCreationRequest request) {
        Cinema cinema = cinemaService.updateCinema(cinemaId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Cinema>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(cinema)
                        .build());
    }

    @DeleteMapping("/{cinemaId}")
    ResponseEntity<ApiResponse<Cinema>> deleteCinema(@PathVariable(name = "cinemaId") String cinemaId) {
        cinemaService.deleteCinema(cinemaId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Cinema>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
