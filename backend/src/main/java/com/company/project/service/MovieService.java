package com.company.project.service;

import com.company.project.dto.request.MovieCreationRequest;
import com.company.project.entity.Movie;
import com.company.project.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public Movie createMovie(MovieCreationRequest request){
        Movie movie = new Movie();

        movie.setRating_id(movie.getRating_id());
        movie.setMovie_title(movie.getMovie_title());
        movie.setMovie_genre(movie.getMovie_genre());
        movie.setMovie_director(movie.getMovie_director());
        movie.setMovie_cast(movie.getMovie_cast());
        movie.setMovie_status(movie.getMovie_status());
        movie.setMovie_format(movie.getMovie_format());
        movie.setMovie_duration_min(movie.getMovie_duration_min());
        movie.setMovie_release_date(movie.getMovie_release_date());
        movie.setMovie_trailer_url(movie.getMovie_trailer_url());
        movie.setMovie_description(movie.getMovie_description());
        movie.setMovie_language(movie.getMovie_language());
        movie.setMovie_poster_image(movie.getMovie_poster_image());

        return movieRepository.save(movie);
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(String movie_id){
        return movieRepository.findById(movie_id).orElseThrow(() -> new RuntimeException("Movie not found"));
    }

}
