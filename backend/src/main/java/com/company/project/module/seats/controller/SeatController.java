package com.company.project.module.seats.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.seats.common.SeatStatusMessage;
import com.company.project.module.seats.dto.request.SeatCreationRequest;
import com.company.project.module.seats.dto.response.SeatDto;
import com.company.project.module.seats.service.SeatService;

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/seats")
public class SeatController {

    private final SeatService seatService;

    @Autowired
    public SeatController(SeatService seatService) {
        this.seatService = seatService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<SeatDto>>> getAllSeats() {
        return ResponseEntity.status(HttpStatus.OK.value())
                             .body(ApiResponse.<List<SeatDto>>builder()
                                 .status(Status.SUCCESS.getValue())
                                 .message(SeatStatusMessage.GET_SUCCESS.getMessage())
                                 .data(seatService.getAllSeats())
                                 .build());
    }

    @GetMapping("/{seatId}")
    ResponseEntity<ApiResponse<SeatDto>> getSeatById(@PathVariable(name = "seatId") String seatId) {
        SeatDto seat = seatService.getSeatDtoById(seatId);

        return ResponseEntity.status(HttpStatus.OK.value())
                             .body(ApiResponse.<SeatDto>builder()
                                 .status(Status.SUCCESS.getValue())
                                 .message(SeatStatusMessage.GET_SUCCESS.getMessage())
                                 .data(seat)
                                 .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<SeatDto>> addSeat(@RequestBody @Valid SeatCreationRequest request) {
        SeatDto seat = seatService.createSeat(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                             .body(ApiResponse.<SeatDto>builder()
                                 .status(Status.SUCCESS.getValue())
                                 .message(SeatStatusMessage.CREATE_SUCCESS.getMessage())
                                 .data(seat)
                                 .build());
    }

    @PutMapping("/{seatId}")
    ResponseEntity<ApiResponse<SeatDto>> updateSeat(@PathVariable(name = "seatId") String seatId,
                                                    @Valid @RequestBody SeatCreationRequest request) {
        SeatDto seat = seatService.updateSeat(seatId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                             .body(ApiResponse.<SeatDto>builder()
                                 .status(Status.SUCCESS.getValue())
                                 .message(SeatStatusMessage.UPDATE_SUCCESS.getMessage())
                                 .data(seat)
                                 .build());
    }

    @DeleteMapping("/{seatId}")
    ResponseEntity<ApiResponse<Void>> deleteSeat(@PathVariable(name = "seatId") String seatId) {
        seatService.deleteSeatById(seatId);

        return ResponseEntity.status(HttpStatus.OK.value())
                             .body(ApiResponse.<Void>builder()
                                 .status(Status.SUCCESS.getValue())
                                 .message(SeatStatusMessage.DELETE_SUCCESS.getMessage())
                                 .build());
    }

    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<SeatDto>>> filterSeats(@RequestParam(value = "search") String search,
                                                                    @RequestParam(value = "page", defaultValue = "1") int page,
                                                                    @RequestParam(value = "seatTypes", required = false) List<String> seatTypes,
                                                                    @RequestParam(value = "sortBy", defaultValue = "seatName") String sortBy,
                                                                    @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
                                                                    @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
        return ResponseEntity.ok().body(ApiResponse.<ApiPagination<SeatDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(SeatStatusMessage.GET_SUCCESS.getMessage())
                .data(seatService.filterSeats(search, page, pageSize, seatTypes, sortBy, sortDirection))
                .build());
    }

}
