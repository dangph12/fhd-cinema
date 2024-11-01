package com.company.project.module.cinemas.controller;

import java.util.List;

import com.company.project.module.cinemas.dto.request.CinemaUpdateRequest;
import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.cinemas.common.CinemaStatusMessage;
import com.company.project.module.cinemas.dto.request.CinemaCreationRequest;
import com.company.project.module.cinemas.dto.response.CinemaDto;
import com.company.project.module.cinemas.service.CinemaService;

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
@RequestMapping("/cinemas")
public class CinemaController {

    private final CinemaService cinemaService;

    public CinemaController(CinemaService cinemaService) {
        this.cinemaService = cinemaService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<CinemaDto>>> getAllCinemas() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<CinemaDto>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.GET_SUCCESS.getMessage())
                        .data(cinemaService.findAllCinemas())
                        .build());
    }

    @GetMapping("/{cinemaId}")
    ResponseEntity<ApiResponse<CinemaDto>> getCinemaById(@PathVariable(name = "cinemaId") String cinemaId) {
        CinemaDto cinemaDto = cinemaService.getCinemaDtoById(cinemaId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<CinemaDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.GET_SUCCESS.getMessage())
                        .data(cinemaDto)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<CinemaDto>> addCinema(@RequestBody @Valid CinemaCreationRequest request) {
        CinemaDto cinemaDto = cinemaService.addCinema(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<CinemaDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(cinemaDto)
                        .build());
    }

    @PutMapping("/{cinemaId}")
    ResponseEntity<ApiResponse<CinemaDto>> updateCinema(@PathVariable(name = "cinemaId") String cinemaId, @RequestBody @Valid CinemaUpdateRequest request) {
        CinemaDto cinemaDto = cinemaService.updateCinema(cinemaId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<CinemaDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(cinemaDto)
                        .build());
    }

    @DeleteMapping("/{cinemaId}")
    ResponseEntity<ApiResponse<Void>> deleteCinema(@PathVariable(name = "cinemaId") String cinemaId) {
        cinemaService.deleteCinema(cinemaId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(CinemaStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<CinemaDto>>> filterCinemas(
        @RequestParam(value = "search") String search,
        @RequestParam(value = "page", defaultValue = "1") int page,
        @RequestParam(value = "sortBy", defaultValue = "cinemaName") String sortBy, 
        @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
        @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
      return ResponseEntity.ok().body(ApiResponse.<ApiPagination<CinemaDto>>builder()
              .status(Status.SUCCESS.getValue())
              .message(CinemaStatusMessage.GET_SUCCESS.getMessage())
              .data(cinemaService.filterCinemas(search, page, pageSize, sortBy, sortDirection))
              .build());
    }

}
