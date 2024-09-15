package com.company.project.controllers;

import com.company.project.dto.request.MovieCreationRequest;
import com.company.project.entity.Movie;
import com.company.project.service.MovieService;
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
    Movie getMovie(@PathVariable String movie_id, @RequestBody MovieCreationRequest request){
        return movieService.getMovieById(movie_id);
    }
}
