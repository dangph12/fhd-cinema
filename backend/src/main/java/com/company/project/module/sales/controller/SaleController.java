package com.company.project.module.sales.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.sales.common.SaleStatusMessage;
import com.company.project.module.sales.dto.response.SaleMovieDto;
import com.company.project.module.sales.service.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
public class SaleController {

  @Autowired
  private SaleService saleService;

  @GetMapping("/movies/{movieId}")
  ResponseEntity<ApiResponse<SaleMovieDto>> getTotalRevenueByMovieId(
      @PathVariable(name = "movieId") String movieId) {
    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<SaleMovieDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(SaleStatusMessage.GET_SUCCESS.getMessage())
            .data(saleService.calculateRevenueByMovieId(movieId))
            .build());
  }
}
