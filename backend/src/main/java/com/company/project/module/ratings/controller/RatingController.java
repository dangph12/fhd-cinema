package com.company.project.module.ratings.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.ratings.common.RatingStatusMessage;
import com.company.project.module.ratings.dto.request.RatingCreationRequest;
import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.ratings.service.RatingService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ratings")
public class RatingController {
    private final RatingService ratingService;

    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Rating>>> getAllAccount() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<Rating>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(RatingStatusMessage.GET_SUCCESS.getMessage())
                        .data(ratingService.getAllRatings())
                        .build());
    }

    @GetMapping("/{ratingId}")
    ResponseEntity<ApiResponse<Rating>> getRating(@PathVariable String ratingId) {
        Rating rating = ratingService.getRatingById(ratingId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Rating>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(RatingStatusMessage.GET_SUCCESS.getMessage())
                        .data(rating)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<Rating>> addRating(@RequestBody @Valid RatingCreationRequest request) {
        Rating rating = ratingService.createRating(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Rating>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(RatingStatusMessage.CREATE_SUCCESS.getMessage())
                    .data(rating)
                    .build());
    }

    @PutMapping("/{ratingId}")
    ResponseEntity<ApiResponse<Rating>> updateRating(@PathVariable String ratingId, @RequestBody @Valid RatingCreationRequest request) {
        Rating rating = ratingService.updateRating(ratingId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Rating>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(RatingStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(rating)
                        .build());
    }

    @DeleteMapping("/{ratingId}")
    ResponseEntity<ApiResponse<Rating>> deleteRating(@PathVariable String ratingId) {
        ratingService.deleteRating(ratingId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Rating>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(RatingStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
