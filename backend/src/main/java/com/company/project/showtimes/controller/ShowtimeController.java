package com.company.project.showtimes.controller;

import com.company.project.showtimes.dto.request.ApiResponse;
import com.company.project.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.showtimes.entity.Showtime;
import com.company.project.showtimes.exception.ErrorCode;
import com.company.project.showtimes.service.ShowtimeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/showtimes")
public class ShowtimeController {

    @Autowired
    private ShowtimeService showtimeService;

    @GetMapping
    List<Showtime> getAllShowtimes() {
        return showtimeService.getAllShowtimes();
    }

    @GetMapping("/{showtimeId}")
    Showtime getShowtime(@PathVariable @Valid String showtimeId) {
        return showtimeService.getShowtimeById(showtimeId);
    }

    @PostMapping
    ApiResponse<Showtime> createShowtime(@RequestBody ShowtimeCreationRequest request) {
        ApiResponse<Showtime> apiResponse = new ApiResponse<>();

        Showtime showtime = showtimeService.createShowtime(request);
        apiResponse.setResult(showtime);

        return apiResponse;
    }

    @PutMapping("/{showtimeId}")
    ApiResponse<Showtime> updateShowtime(@PathVariable String showtimeId, @RequestBody ShowtimeUpdateRequest request) {
        ApiResponse<Showtime> apiResponse = new ApiResponse<>();

        Showtime showtime = showtimeService.updateShowtime(showtimeId, request);
        apiResponse.setResult(showtime);

        return apiResponse;
    }

    @DeleteMapping("/{showtimeId}")
    ApiResponse<ErrorCode> deleteShowtime(@PathVariable String showtimeId) {
        showtimeService.deleteShowtime(showtimeId);

        ApiResponse<ErrorCode> apiResponse = new ApiResponse<>();
        ErrorCode errorCode = ErrorCode.DELETE_SHOWTIME_SUCCESSFULLY;
        apiResponse.setCode(errorCode.getCode());
        apiResponse.setMessage(errorCode.getMessage());

        return apiResponse;
    }
}
