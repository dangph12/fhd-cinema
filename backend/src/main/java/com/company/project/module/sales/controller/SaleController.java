package com.company.project.module.sales.controller;

import java.time.LocalDateTime;
import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.sales.common.SaleStatusMessage;
import com.company.project.module.sales.dto.response.SaleMovieDto;
import com.company.project.module.sales.service.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

  @GetMapping("/view")
    public ResponseEntity<ApiResponse<ApiPagination<SaleMovieDto>>> viewSales(
            @RequestParam(value = "movieTitle", required = false) String movieTitle,
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(value = "cinemas", required = false) List<String> cinemaNames,
            @RequestParam(value = "startDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
            @RequestParam(value = "endDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate,
            @RequestParam(value = "sortBy", defaultValue = "totalRevenue") String sortBy,
            @RequestParam(value = "sortDirection", defaultValue = "DESC") String sortDirection) {

        List<String> cinemas = cinemaNames;
        if(cinemaNames.isEmpty()) {
          cinemas = null;
        }

        ApiPagination<SaleMovieDto> pagination = saleService.viewSales(
                movieTitle, page, pageSize, cinemas, startDate, endDate, sortBy, sortDirection);

        return ResponseEntity.ok(ApiResponse.<ApiPagination<SaleMovieDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(SaleStatusMessage.GET_SALE_SUCCESS.getMessage())
                .data(pagination)
                .build());
    }
}
