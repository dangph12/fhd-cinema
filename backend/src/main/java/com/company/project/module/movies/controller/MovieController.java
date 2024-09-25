package com.company.project.movies.controller;

import com.company.project.movies.dto.request.MovieApiResponse;
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
    MovieApiResponse<Movie> addMovie(@RequestBody @Valid MovieCreationRequest request){
        MovieApiResponse<Movie> movieApiResponse = new MovieApiResponse<>();

        Movie movie = movieService.createMovie(request);
        movieApiResponse.setResult(movie);

        return movieApiResponse;
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
    MovieApiResponse<Movie> updateMovie(@PathVariable(name = "movieId") String movieId, @RequestBody @Valid MovieUpdateRequest request){
        MovieApiResponse<Movie> movieApiResponse = new MovieApiResponse<>();

        Movie movie = movieService.updateMovie(movieId, request);
        movieApiResponse.setResult(movie);

        return movieApiResponse;
    }

    @DeleteMapping("/{movieId}")
    MovieApiResponse<Void> deleteMovie(@PathVariable String movieId){
        movieService.deleteMovieByMovieId(movieId);

        MovieApiResponse<Void> movieApiResponse = new MovieApiResponse<>();
        ErrorCode errorCode = ErrorCode.DELETE_SUCCESS;
        movieApiResponse.setCode(errorCode.getCode());
        movieApiResponse.setMessage(errorCode.getMessage());

        return movieApiResponse;
    }
}
