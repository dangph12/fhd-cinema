package com.company.project.module.showtimes.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.showtimes.common.ShowtimeStatusMessage;
import com.company.project.module.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.module.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.service.ShowtimeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/showtimes")
public class ShowtimeController {

    private final ShowtimeService showtimeService;

    public ShowtimeController(ShowtimeService showtimeService) {
        this.showtimeService = showtimeService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Showtime>>> getAllShowtimes() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<Showtime>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ShowtimeStatusMessage.GET_SUCCESS.getMessage())
                        .data(showtimeService.getAllShowtimes())
                        .build());
    }

    @GetMapping("/{showtimeId}")
    ResponseEntity<ApiResponse<Showtime>> getShowtime(@PathVariable(name = "showtimeId") String showtimeId) {
        Showtime showtime = showtimeService.getShowtimeById(showtimeId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Showtime>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ShowtimeStatusMessage.GET_SUCCESS.getMessage())
                        .data(showtime)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<Showtime>> createShowtime(@RequestBody @Valid ShowtimeCreationRequest request) {
        Showtime showtime = showtimeService.createShowtime(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Showtime>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ShowtimeStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(showtime)
                        .build());
    }

    @PutMapping("/{showtimeId}")
    ResponseEntity<ApiResponse<Showtime>> updateShowtime(@PathVariable(name = "showtimeId") String showtimeId, @RequestBody @Valid ShowtimeUpdateRequest request) {
        Showtime showtime = showtimeService.updateShowtime(showtimeId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Showtime>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ShowtimeStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(showtime)
                        .build());
    }

    @DeleteMapping("/{showtimeId}")
    ResponseEntity<ApiResponse<Void>> deleteShowtime(@PathVariable(name = "showtimeId") String showtimeId) {
        showtimeService.deleteShowtime(showtimeId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ShowtimeStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }
}
