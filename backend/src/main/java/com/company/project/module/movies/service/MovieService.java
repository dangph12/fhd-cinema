package com.company.project.module.movies.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.movies.common.MovieStatusMessage;
import com.company.project.module.movies.dto.request.MovieCreationRequest;
import com.company.project.module.movies.dto.request.MovieUpdateRequest;
import com.company.project.module.movies.dto.response.MoviePagination;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.exception.MovieException;
import com.company.project.module.movies.repository.MovieRepository;
import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.ratings.repository.RatingRepository;

import org.springframework.stereotype.Service;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final RatingRepository ratingRepository;

//    public MovieService(MovieRepository movieRepository) {
//        this.movieRepository = movieRepository;
//    }

    public MovieService(MovieRepository movieRepository, RatingRepository ratingRepository) {
        this.movieRepository = movieRepository;
        this.ratingRepository = ratingRepository;
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

        Rating rating = ratingRepository.findById(request.getRatingId())
                .orElseThrow(() -> new MovieException(Status.FAIL.getValue(), "Invalid Rating ID"));

        Movie movie = Movie.builder()
                .rating(rating)
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

        Rating rating = ratingRepository.findById(request.getRatingId())
                .orElseThrow(() -> new MovieException(Status.FAIL.getValue(), "Invalid Rating ID"));

        Movie existedMovie = getMovieById(movieId);

        existedMovie.setRating(rating);
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
