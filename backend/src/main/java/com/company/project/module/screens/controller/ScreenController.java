package com.company.project.module.screens.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.screens.common.ScreenStatusMessage;
import com.company.project.module.screens.dto.request.ScreenCreationRequest;
import com.company.project.module.screens.dto.response.ScreenDto;
import com.company.project.module.screens.service.ScreenService;

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
@RequestMapping("/screens")
public class ScreenController {

    private final ScreenService screenService;

    public ScreenController(ScreenService screenService) {
        this.screenService = screenService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<ScreenDto>>> getAllScreens() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<ScreenDto>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.GET_SUCCESS.getMessage())
                        .data(screenService.getAllScreens())
                        .build());
    }

    @GetMapping("/{screenId}")
    ResponseEntity<ApiResponse<ScreenDto>> getScreenById(@PathVariable String screenId) {
        ScreenDto screen = screenService.getScreenDtoById(screenId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<ScreenDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.GET_SUCCESS.getMessage())
                        .data(screen)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<ScreenDto>> createScreen(@RequestBody @Valid ScreenCreationRequest request) {
        ScreenDto screen = screenService.createScreen(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<ScreenDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(screen)
                        .build());
    }

    @PutMapping("/{screenId}")
    ResponseEntity<ApiResponse<ScreenDto>> updateScreen(@PathVariable String screenId, @RequestBody @Valid ScreenCreationRequest request) {
        ScreenDto screen = screenService.updateScreen(screenId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<ScreenDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(screen)
                        .build());
    }

    @DeleteMapping("/{screenId}")
    ResponseEntity<ApiResponse<Void>> deleteScreen(@PathVariable String screenId) {
        screenService.deleteScreenById(screenId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<ScreenDto>>> filterScreens(
        @RequestParam(value = "search") String search,
        @RequestParam(value = "page", defaultValue = "1") int page,
        @RequestParam(value = "cinemaNames", required = false) List<String> cinemaNames,
        @RequestParam(value = "sortBy", defaultValue = "screenName") String sortBy, 
        @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
        @RequestParam(value = "pageSize", defaultValue = "10") int pageSize) {
      return ResponseEntity.ok().body(ApiResponse.<ApiPagination<ScreenDto>>builder()
              .status(Status.SUCCESS.getValue())
              .message(ScreenStatusMessage.GET_SUCCESS.getMessage())
              .data(screenService.filterScreens(search, page, pageSize, cinemaNames, sortBy, sortDirection))
              .build());
    }

}
