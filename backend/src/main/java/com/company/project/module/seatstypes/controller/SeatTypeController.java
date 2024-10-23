package com.company.project.module.seatstypes.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.seatstypes.common.SeatTypeStatusMessage;
import com.company.project.module.seatstypes.dto.request.SeatTypeCreationRequest;
import com.company.project.module.seatstypes.dto.response.SeatTypeDto;
import com.company.project.module.seatstypes.service.SeatTypeService;

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
@RequestMapping("/seats-types")
public class SeatTypeController {

    private final SeatTypeService seatTypeService;

    public SeatTypeController(SeatTypeService seatTypeService) {
        this.seatTypeService = seatTypeService;
    }

    @GetMapping()
    ResponseEntity<ApiResponse<List<SeatTypeDto>>> getAllSeatTypes() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<SeatTypeDto>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(SeatTypeStatusMessage.GET_SUCCESS.getMessage())
                        .data(seatTypeService.getAllSeatTypes())
                        .build());
    }

    @GetMapping("/{seatTypeId}")
    ResponseEntity<ApiResponse<SeatTypeDto>> getSeatTypeById(@PathVariable(name = "seatTypeId") String seatTypeId) {
        SeatTypeDto seatType = seatTypeService.getSeatTypeDtoById(seatTypeId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<SeatTypeDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(SeatTypeStatusMessage.GET_SUCCESS.getMessage())
                        .data(seatType)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<SeatTypeDto>> addSeatType(
            @RequestBody @Valid SeatTypeCreationRequest request) {
        SeatTypeDto seatType = seatTypeService.createSeatType(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<SeatTypeDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(SeatTypeStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(seatType)
                        .build());
    }

    @PutMapping("/{seatTypeId}")
    ResponseEntity<ApiResponse<SeatTypeDto>> updateSeatType(
            @PathVariable(name = "seatTypeId") String seatTypeId,
            @Valid @RequestBody SeatTypeCreationRequest request) {
        SeatTypeDto seatType = seatTypeService.updateSeatType(seatTypeId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<SeatTypeDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(SeatTypeStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(seatType)
                        .build());
    }

    @DeleteMapping("/{seatTypeId}")
    ResponseEntity<ApiResponse<Void>> deleteSeatType(
            @PathVariable(name = "seatTypeId") String seatTypeId) {
        seatTypeService.deleteSeatTypeById(seatTypeId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(SeatTypeStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<SeatTypeDto>>> filterSeatTypes(
            @RequestParam(value = "search") String search,
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "sortBy", defaultValue = "seatTypeName") String sortBy, 
            @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
            @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
        return ResponseEntity.ok().body(ApiResponse.<ApiPagination<SeatTypeDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(SeatTypeStatusMessage.GET_SUCCESS.getMessage())
                .data(seatTypeService.filterSeatTypes(search, page, pageSize, sortBy, sortDirection))
                .build());
    }

}
