package com.company.project.module.movies.service;

import com.company.project.common.Status;
import com.company.project.module.movies.common.MovieStatusMessage;
import com.company.project.module.movies.dto.request.MovieCreationRequest;
import com.company.project.module.movies.dto.request.MovieUpdateRequest;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.exception.MovieException;
import com.company.project.module.movies.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(String movieId){
        return movieRepository.findById(movieId).orElseThrow(() -> new MovieException(Status.FAIL.getValue(), MovieStatusMessage.NOT_EXIST.getMessage()));
    }

    public Movie createMovie(MovieCreationRequest request){

        if(movieRepository.existsByMovieTitle(request.getMovieTitle())) {
            throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.MOVIE_EXIST.getMessage());
        }

        Movie movie = Movie.builder()
                .movieTitle(request.getMovieTitle())
                .movieGenre(request.getMovieGenre())
                .movieDirector(request.getMovieDirector())
                .movieCast(request.getMovieCast())
                .movieStatus(request.getMovieStatus())
                .movieFormat(request.getMovieFormat())
                .movieDurationMinute(request.getMovieDurationMinute())
                .movieReleaseDate(request.getMovieReleaseDate())
                .movieTrailerUrl(request.getMovieTrailerUrl())
                .movieDescription(request.getMovieDescription())
                .movieLanguage(request.getMovieLanguage())
                .moviePosterUrl(request.getMoviePosterUrl())
                .build();

        return movieRepository.save(movie);
    }

    public Movie updateMovie(String movieId, MovieUpdateRequest request) {
        if(!movieRepository.existsByMovieId(movieId)) {
            throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.NOT_EXIST.getMessage());
        }

        Movie existedMovie = getMovieById(movieId);

        existedMovie.setMovieTitle(request.getMovieTitle());
        existedMovie.setMovieGenre(request.getMovieGenre());
        existedMovie.setMovieDirector(request.getMovieDirector());
        existedMovie.setMovieCast(request.getMovieCast());
        existedMovie.setMovieStatus(request.getMovieStatus());
        existedMovie.setMovieFormat(request.getMovieFormat());
        existedMovie.setMovieDurationMinute(request.getMovieDurationMinute());
        existedMovie.setMovieReleaseDate(request.getMovieReleaseDate());
        existedMovie.setMovieTrailerUrl(request.getMovieTrailerUrl());
        existedMovie.setMovieDescription(request.getMovieDescription());
        existedMovie.setMovieLanguage(request.getMovieLanguage());
        existedMovie.setMoviePosterUrl(request.getMoviePosterUrl());

        return movieRepository.save(existedMovie);
    }

    public void deleteMovieByMovieId(String movieId){
        if(!movieRepository.existsByMovieId(movieId)) {
            throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.NOT_EXIST.getMessage());
        }

        movieRepository.deleteById(movieId);

    }

}
