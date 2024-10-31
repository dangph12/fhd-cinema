package com.company.project.module.snacks.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.snacks.common.SnackStatusMessage;
import com.company.project.module.snacks.dto.request.SnackCreationRequest;
import com.company.project.module.snacks.dto.response.SnackDto;
import com.company.project.module.snacks.service.SnackService;

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
@RequestMapping("/snacks")
public class SnackController {
  
  @Autowired
  private SnackService snackService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<SnackDto>>> getAllSnacks() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<SnackDto>>builder()
      .status(Status.SUCCESS.getValue())
      .message(SnackStatusMessage.GET_SUCCESS.getMessage())
      .data(snackService.getAllSnacks())  
      .build());
  }

  @GetMapping("/{snackId}")
  ResponseEntity<ApiResponse<SnackDto>> getSnackById(@PathVariable(name = "snackId") String snackId) {
    SnackDto snackDto = snackService.getSnackDtoById(snackId);

    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<SnackDto>builder()
      .status(Status.SUCCESS.getValue())
      .message(SnackStatusMessage.GET_SUCCESS.getMessage())
      .data(snackDto)
      .build());
  }
  
  @PostMapping
  ResponseEntity<ApiResponse<SnackDto>> addSnack(
    @RequestBody @Valid SnackCreationRequest request) {
    SnackDto snackDto = snackService.createSnack(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<SnackDto>builder()
      .status(Status.SUCCESS.getValue())
      .message(SnackStatusMessage.CREATE_SUCCESS.getMessage())
      .data(snackDto)
      .build());
  }

  @PutMapping("/{snackId}")
  ResponseEntity<ApiResponse<SnackDto>> updateSnack(
    @PathVariable(name = "snackId") String snackId,
    @Valid @RequestBody SnackCreationRequest request) {
    SnackDto snackDto = snackService.updateSnack(snackId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<SnackDto>builder()
        .status(Status.SUCCESS.getValue())
        .message(SnackStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(snackDto)
        .build());
  }

  @DeleteMapping("/{snackId}")
  ResponseEntity<ApiResponse<Void>> deleteSnack(
    @PathVariable(name = "snackId") String snackId) {
    snackService.deleteSnackById(snackId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(SnackStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

  @GetMapping(params = "search")
  ResponseEntity<ApiResponse<ApiPagination<SnackDto>>> filterSnacks(
      @RequestParam(value = "search") String search,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "sortBy", defaultValue = "snackName") String sortBy, 
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
      @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
    ApiPagination<SnackDto> snackPagination = snackService.filterSnacks(search, page, pageSize, sortBy, sortDirection);

    return ResponseEntity.ok().body(ApiResponse.<ApiPagination<SnackDto>>builder()
            .status(Status.SUCCESS.getValue())
            .message(SnackStatusMessage.GET_SUCCESS.getMessage())
            .data(snackPagination)  
            .build());
  }

}
