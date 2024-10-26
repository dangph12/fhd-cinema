package com.company.project.module.movies.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.movies.common.MovieStatusMessage;
import com.company.project.module.movies.dto.request.MovieCreationRequest;
import com.company.project.module.movies.dto.request.MovieUpdateRequest;
import com.company.project.module.movies.dto.response.MovieDto;
import com.company.project.module.movies.service.MovieService;

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
@RequestMapping("/movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    // Create new movie
    @PostMapping
    ResponseEntity<ApiResponse<MovieDto>> createMovie(@RequestBody @Valid MovieCreationRequest request) {
        MovieDto movie = movieService.createMovie(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<MovieDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(movie)
                        .build());
    }

    // Get all movies
    @GetMapping
    ResponseEntity<ApiResponse<List<MovieDto>>> getAllMovies() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<MovieDto>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.GET_SUCCESS.getMessage())
                        .data(movieService.getAllMovies())
                        .build());
    }

    // Get movie by ID
    @GetMapping("/{movieId}")
    ResponseEntity<ApiResponse<MovieDto>> getMovieById(@PathVariable(name = "movieId") String movieId) {
        MovieDto movie = movieService.getMovieDtoById(movieId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<MovieDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.GET_SUCCESS.getMessage())
                        .data(movie)
                        .build());
    }

    // Update movie by ID
    @PutMapping("/{movieId}")
    ResponseEntity<ApiResponse<MovieDto>> updateMovie(@PathVariable(name = "movieId") String movieId,
                                                      @RequestBody @Valid MovieUpdateRequest request) {
        MovieDto movie = movieService.updateMovie(movieId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<MovieDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(movie)
                        .build());
    }

    // Soft delete movie by ID
    @DeleteMapping("/{movieId}")
    ResponseEntity<ApiResponse<Void>> deleteMovie(@PathVariable(name = "movieId") String movieId) {
        movieService.deleteMovieById(movieId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(MovieStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

    // Filter movies
    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<MovieDto>>> filterMovies(
            @RequestParam(value = "search") String search,
            @RequestParam(value = "page", defaultValue = "1") int page,
            @RequestParam(value = "ratings", required = false) List<String> ratings,
            @RequestParam(value = "status", required = false) List<String> status,
            @RequestParam(value = "sortBy", defaultValue = "movieTitle") String sortBy,
            @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
            @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {

        ApiPagination<MovieDto> pagination = movieService.filterMovies(search, page, pageSize, ratings, status, sortBy, sortDirection);
        return ResponseEntity.ok().body(ApiResponse.<ApiPagination<MovieDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(MovieStatusMessage.GET_SUCCESS.getMessage())
                .data(pagination)
                .build());
    }

    @GetMapping(params = "movieTitle")
    ResponseEntity<ApiResponse<List<MovieDto>>> searchMovieByTitle(
            @RequestParam(value = "movieTitle") String movieTitle) {

        List<MovieDto> movieDtos = movieService.getMovieByTitle(movieTitle);
        return ResponseEntity.ok().body(ApiResponse.<List<MovieDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(MovieStatusMessage.GET_SUCCESS.getMessage())
                .data(movieDtos)
                .build());
    }

}
