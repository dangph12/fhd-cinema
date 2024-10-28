package com.company.project.module.showtimes.controller;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.showtimes.common.ShowtimeStatusMessage;
import com.company.project.module.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.module.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.module.showtimes.dto.response.ShowtimeDto;
import com.company.project.module.showtimes.service.ShowtimeService;

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
@RequestMapping("/showtimes")
public class ShowtimeController {

    private final ShowtimeService showtimeService;

    public ShowtimeController(ShowtimeService showtimeService) {
        this.showtimeService = showtimeService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ShowtimeDto>>> getAllShowtimes() {
        List<ShowtimeDto> showtimes = showtimeService.getAllShowtimes();
        return ResponseEntity.ok(ApiResponse.<List<ShowtimeDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(ShowtimeStatusMessage.GET_SUCCESS.getMessage())
                .data(showtimes)
                .build());
    }

    @GetMapping("/{showtimeId}")
    public ResponseEntity<ApiResponse<ShowtimeDto>> getShowtimeById(@PathVariable String showtimeId) {
        ShowtimeDto showtime = showtimeService.getShowtimeDtoById(showtimeId);
        return ResponseEntity.ok(ApiResponse.<ShowtimeDto>builder()
                .status(Status.SUCCESS.getValue())
                .message(ShowtimeStatusMessage.GET_SUCCESS.getMessage())
                .data(showtime)
                .build());
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ShowtimeDto>> createShowtime(@RequestBody @Valid ShowtimeCreationRequest request) {
        ShowtimeDto showtime = showtimeService.createShowtime(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.<ShowtimeDto>builder()
                .status(Status.SUCCESS.getValue())
                .message(ShowtimeStatusMessage.CREATE_SUCCESS.getMessage())
                .data(showtime)
                .build());
    }

    @PutMapping("/{showtimeId}")
    public ResponseEntity<ApiResponse<ShowtimeDto>> updateShowtime(@PathVariable String showtimeId,
                                                                   @RequestBody @Valid ShowtimeUpdateRequest request) {
        ShowtimeDto showtime = showtimeService.updateShowtime(showtimeId, request);
        return ResponseEntity.ok(ApiResponse.<ShowtimeDto>builder()
                .status(Status.SUCCESS.getValue())
                .message(ShowtimeStatusMessage.UPDATE_SUCCESS.getMessage())
                .data(showtime)
                .build());
    }

    @DeleteMapping("/{showtimeId}")
    public ResponseEntity<ApiResponse<Void>> deleteShowtime(@PathVariable String showtimeId) {
        showtimeService.deleteShowtime(showtimeId);
        return ResponseEntity.ok(ApiResponse.<Void>builder()
                .status(Status.SUCCESS.getValue())
                .message(ShowtimeStatusMessage.DELETE_SUCCESS.getMessage())
                .build());
    }

    @GetMapping(params = "movieTitle")
    public ResponseEntity<ApiResponse<ApiPagination<ShowtimeDto>>> filterShowtimes(
            @RequestParam(value = "movieTitle", required = false) String movieTitle,
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "cinemas", required = false) List<String> cinemas,
            @RequestParam(value = "startDate", required = false) LocalDateTime startDate,
            @RequestParam(value = "endDate", required = false) LocalDateTime endDate,
            @RequestParam(value = "sortBy", defaultValue = "showtimeAt") String sortBy,
            @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize) {

        ApiPagination<ShowtimeDto> pagination = showtimeService.filterShowtimes(
                page, pageSize, movieTitle, cinemas, startDate, endDate, sortBy, sortDirection);

        return ResponseEntity.ok(ApiResponse.<ApiPagination<ShowtimeDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(ShowtimeStatusMessage.GET_SUCCESS.getMessage())
                .data(pagination)
                .build());
    }
}
