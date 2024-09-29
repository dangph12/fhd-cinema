package com.company.project.module.screens.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.screens.common.ScreenStatusMessage;
import com.company.project.module.screens.dto.request.ScreenCreationRequest;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.service.ScreenService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/screens")
public class ScreenController {

    private final ScreenService screenService;

    public ScreenController(ScreenService screenService) {
        this.screenService = screenService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Screen>>> getAllScreens() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<Screen>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.GET_SUCCESS.getMessage())
                        .data(screenService.findAll())
                        .build());
    }

    @GetMapping("/{screenId}")
    ResponseEntity<ApiResponse<Screen>> getScreenById(@PathVariable String screenId) {
        Screen screen = screenService.findScreenById(screenId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Screen>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.GET_SUCCESS.getMessage())
                        .data(screen)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<Screen>> createScreen(@RequestBody @Valid ScreenCreationRequest request) {
        Screen screen = screenService.createScreen(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Screen>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(screen)
                        .build());
    }

    @PutMapping("/{screenId}")
    ResponseEntity<ApiResponse<Screen>> updateScreen(@PathVariable String screenId, @RequestBody @Valid ScreenCreationRequest request) {
        Screen screen = screenService.updateScreen(screenId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Screen>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(screen)
                        .build());
    }

    @DeleteMapping("/{screenId}")
    ResponseEntity<ApiResponse<Screen>> deleteScreen(@PathVariable String screenId) {
        screenService.deleteScreen(screenId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Screen>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(ScreenStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
