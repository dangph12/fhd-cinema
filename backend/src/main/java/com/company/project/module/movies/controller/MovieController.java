package com.company.project.module.movies.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.movies.common.MovieStatusMessage;
import com.company.project.module.movies.dto.request.MovieCreationRequest;
import com.company.project.module.movies.dto.request.MovieUpdateRequest;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.service.MovieService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @PostMapping
    ResponseEntity<ApiResponse<Movie>> addMovie(@RequestBody @Valid MovieCreationRequest request) {
        Movie movie = movieService.createMovie(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Movie>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(movie)
                        .build());
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Movie>>> getAllMovies(){
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<Movie>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.GET_SUCCESS.getMessage())
                        .data(movieService.getAllMovies())
                        .build());
    }

    @GetMapping("/{movieId}")
    ResponseEntity<ApiResponse<Movie>> getMovie(@PathVariable(name = "movieId") String movieId){
        Movie movie = movieService.getMovieById(movieId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Movie>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.GET_SUCCESS.getMessage())
                        .data(movie)
                        .build());
    }

    @PutMapping("/{movieId}")
    ResponseEntity<ApiResponse<Movie>> updateMovie(@PathVariable(name = "movieId") String movieId, @RequestBody @Valid MovieUpdateRequest request){
        Movie movie = movieService.updateMovie(movieId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Movie>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(movie)
                        .build());
    }

    @DeleteMapping("/{movieId}")
    ResponseEntity<ApiResponse<Void>> deleteMovie(@PathVariable(name = "movieId") String movieId){
        movieService.deleteMovieByMovieId(movieId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }
}
