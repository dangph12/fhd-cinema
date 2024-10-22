package com.company.project.module.showtimes.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.showtimes.common.ShowtimeStatusMessage;
import com.company.project.module.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.module.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.module.showtimes.entity.Showtime;
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

    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<Showtime>>> filterShowtimes(
        @RequestParam(value = "search") String search,
        @RequestParam(value = "page", defaultValue = "1") int page,
        @RequestParam(value = "cinemas", required = false) List<String> cinemas,
        @RequestParam(value = "sortBy", defaultValue = "showtimeAt") String sortBy, 
        @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
        @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
      return ResponseEntity.ok().body(ApiResponse.<ApiPagination<Showtime>>builder()
              .status(Status.SUCCESS.getValue())
              .message(ShowtimeStatusMessage.GET_SUCCESS.getMessage())
              .data(showtimeService.filterShowtimes(search, page, pageSize, cinemas, sortBy, sortDirection))
              .build());
    }

}
