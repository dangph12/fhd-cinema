package com.company.project.movies.controller;

import com.company.project.movies.dto.request.ApiResponse;
import com.company.project.movies.dto.request.MovieCreationRequest;
import com.company.project.movies.dto.request.MovieUpdateRequest;
import com.company.project.movies.entity.Movie;
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
        ApiResponse<Movie>apiResponse = new ApiResponse<>();
        apiResponse.setResult(movieService.createMovie(request));
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
    Movie updateMovie(@PathVariable String movieId, @RequestBody MovieUpdateRequest request){
        return movieService.updateMovie(movieId, request);
    }

    @DeleteMapping("/{movieId}")
    String deleteMovie(@PathVariable String movieId){
        movieService.deleteMovie(movieId);
        return "Movie has been deleted";
    }
}
