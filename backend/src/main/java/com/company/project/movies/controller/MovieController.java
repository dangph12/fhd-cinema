package com.company.project.movies.controller;

import com.company.project.movies.dto.request.MovieCreationRequest;
import com.company.project.movies.dto.request.MovieUpdateRequest;
import com.company.project.movies.entity.Movie;
import com.company.project.movies.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @PostMapping
    Movie addMovie(@RequestBody MovieCreationRequest request){
        return movieService.createMovie(request);
    }

    @GetMapping
    List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }

    @GetMapping("/{movie_id}")
    Movie getMovie(@PathVariable String movie_id){
        return movieService.getMovieById(movie_id);
    }

    @PutMapping("/{userId}")
    Movie updateMovie(@PathVariable String userId, @RequestBody MovieUpdateRequest request){
        return movieService.updateMovie(userId, request);
    }

    @DeleteMapping("/{userId}")
    String deleteMovie(@PathVariable String userId){
        movieService.deleteMovie(userId);
        return "Movie has been deleted";
    }
}
