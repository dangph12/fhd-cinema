package com.company.project.movies.controller;

import com.company.project.movies.dto.request.ApiResponse;
import com.company.project.movies.dto.request.MovieCreationRequest;
import com.company.project.movies.dto.request.MovieUpdateRequest;
import com.company.project.movies.entity.Movie;
import com.company.project.movies.exception.ErrorCode;
import com.company.project.movies.service.MovieService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @PostMapping
    ApiResponse<Movie> addMovie(@RequestBody @Valid MovieCreationRequest request){
        ApiResponse<Movie> apiResponse = new ApiResponse<>();

        Movie movie = movieService.createMovie(request);
        apiResponse.setResult(movie);

        return apiResponse;
    }

    @GetMapping
    List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }

    @GetMapping("/{movieId}")
    Movie getMovie(@PathVariable String movieId){
        return movieService.getMovieById(movieId);
    }

    @PutMapping("/{movieId}")
    ApiResponse<Movie> updateMovie(@PathVariable String movieId, @RequestBody @Valid MovieUpdateRequest request){
        ApiResponse<Movie> apiResponse = new ApiResponse<>();

        Movie movie = movieService.updateMovie(movieId, request);
        apiResponse.setResult(movie);

        return apiResponse;
    }

    @DeleteMapping("/{movieId}")
    ApiResponse<ErrorCode> deleteMovie(@PathVariable String movieId){
        movieService.deleteMovieByMovieId(movieId);

        ApiResponse<ErrorCode> apiResponse = new ApiResponse<>();
        ErrorCode errorCode = ErrorCode.DELETE_SUCCESS;
        apiResponse.setCode(apiResponse.getCode());
        apiResponse.setMessage(apiResponse.getMessage());

        return apiResponse;
    }
}
