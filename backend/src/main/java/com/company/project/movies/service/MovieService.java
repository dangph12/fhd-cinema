package com.company.project.movies.service;

import com.company.project.movies.dto.request.MovieCreationRequest;
import com.company.project.movies.entity.Movie;
import com.company.project.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public Movie createMovie(MovieCreationRequest request){
        Movie movie = new Movie();

        movie.setRating_id(request.getRating_id());
        movie.setMovie_title(request.getMovie_title());
        movie.setMovie_genre(request.getMovie_genre());
        movie.setMovie_director(request.getMovie_director());
        movie.setMovie_cast(request.getMovie_cast());
        movie.setMovie_status(request.getMovie_status());
        movie.setMovie_format(request.getMovie_format());
        movie.setMovie_duration_minute(request.getMovie_duration_minute());
        movie.setMovie_release_date(request.getMovie_release_date());
        movie.setMovie_trailer_url(request.getMovie_trailer_url());
        movie.setMovie_description(request.getMovie_description());
        movie.setMovie_language(request.getMovie_language());
        movie.setMovie_poster_url(request.getMovie_poster_url());

        return movieRepository.save(movie);
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(String movie_id){
        return movieRepository.findById(movie_id).orElseThrow(() -> new RuntimeException("Movie not found"));
    }

}
