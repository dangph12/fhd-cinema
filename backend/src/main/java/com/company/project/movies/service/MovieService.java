package com.company.project.movies.service;

import com.company.project.movies.dto.request.MovieCreationRequest;
import com.company.project.movies.dto.request.MovieUpdateRequest;
import com.company.project.movies.entity.Movie;
import com.company.project.movies.exception.ErrorCode;
import com.company.project.movies.exception.MovieException;
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

        if(movieRepository.existsByMovieTitle(request.getMovieTitle())) {
            throw new MovieException(ErrorCode.MOVIE_EXISTED);
        }

        movie.setRatingId(request.getRatingId());
        movie.setMovieTitle(request.getMovieTitle());
        movie.setMovieGenre(request.getMovieGenre());
        movie.setMovieDirector(request.getMovieDirector());
        movie.setMovieCast(request.getMovieCast());
        movie.setMovieStatus(request.getMovieStatus());
        movie.setMovieFormat(request.getMovieFormat());
        movie.setMovieDurationMinute(request.getMovieDurationMinute());
        movie.setMovieReleaseDate(request.getMovieReleaseDate());
        movie.setMovieTrailerUrl(request.getMovieTrailerUrl());
        movie.setMovieDescription(request.getMovieDescription());
        movie.setMovieLanguage(request.getMovieLanguage());
        movie.setMoviePosterUrl(request.getMoviePosterUrl());

        return movieRepository.save(movie);
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(String movieId){
        return movieRepository.findById(movieId).orElseThrow(() -> new RuntimeException("Movie not found"));
    }

    public Movie updateMovie(String userId, MovieUpdateRequest request) {
        Movie movie = getMovieById(userId);

        movie.setRatingId(request.getRatingId());
        movie.setMovieTitle(request.getMovieTitle());
        movie.setMovieGenre(request.getMovieGenre());
        movie.setMovieDirector(request.getMovieDirector());
        movie.setMovieCast(request.getMovieCast());
        movie.setMovieStatus(request.getMovieStatus());
        movie.setMovieFormat(request.getMovieFormat());
        movie.setMovieDurationMinute(request.getMovieDurationMinute());
        movie.setMovieReleaseDate(request.getMovieReleaseDate());
        movie.setMovieTrailerUrl(request.getMovieTrailerUrl());
        movie.setMovieDescription(request.getMovieDescription());
        movie.setMovieLanguage(request.getMovieLanguage());
        movie.setMoviePosterUrl(request.getMoviePosterUrl());

        return movieRepository.save(movie);
    }

    public void deleteMovie(String movieId){
        movieRepository.deleteById(movieId);
    }

}
