package com.company.project.module.movies.service;

import com.company.project.module.movies.dto.request.MovieCreationRequest;
import com.company.project.module.movies.dto.request.MovieUpdateRequest;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.exception.ErrorCode;
import com.company.project.module.movies.exception.MovieException;
import com.company.project.module.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(String movieId){
        return movieRepository.findById(movieId).orElseThrow(() -> new MovieException(ErrorCode.MOVIE_NOT_FOUND));
    }

    public Movie createMovie(MovieCreationRequest request){
        Movie movie = new Movie();

        if(movieRepository.existsByMovieTitle(request.getMovieTitle())) {
            throw new MovieException(ErrorCode.MOVIE_EXISTED);
        }

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

    public Movie updateMovie(String movieId, MovieUpdateRequest request) {
        if(!movieRepository.existsById(movieId)) {
            throw new MovieException(ErrorCode.MOVIE_NOT_FOUND);
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

    public ErrorCode deleteMovieByMovieId(String movieId){
        if(!movieRepository.existsById(movieId)) {
            throw new MovieException(ErrorCode.MOVIE_NOT_FOUND);
        }

        movieRepository.deleteById(movieId);

        return ErrorCode.DELETE_SUCCESS;
    }

}
