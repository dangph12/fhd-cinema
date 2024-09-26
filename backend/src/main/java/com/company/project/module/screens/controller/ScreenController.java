package com.company.project.module.screens.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.screens.common.ScreenStatusMessage;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.service.ScreenService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
