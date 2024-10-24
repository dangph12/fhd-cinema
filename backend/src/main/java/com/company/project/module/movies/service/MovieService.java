package com.company.project.module.movies.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.movies.common.MovieStatusMessage;
import com.company.project.module.movies.dto.request.MovieCreationRequest;
import com.company.project.module.movies.dto.request.MovieUpdateRequest;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.exception.MovieException;
import com.company.project.module.movies.repository.MovieRepository;
import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.ratings.repository.RatingRepository;
import com.company.project.utils.Utils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final RatingRepository ratingRepository;
    private final Utils utils;

    public MovieService(MovieRepository movieRepository, RatingRepository ratingRepository, Utils utils) {
        this.movieRepository = movieRepository;
        this.ratingRepository = ratingRepository;
        this.utils = utils;
    }

    public List<Movie> getAllMovies(){
        return movieRepository.findAll();
    }

    public Movie getMovieById(String movieId){
        return movieRepository.findById(movieId)
            .orElseThrow(() -> new MovieException(Status.FAIL.getValue(), MovieStatusMessage.NOT_EXIST.getMessage()));
    }

    public ApiPagination<Movie> filterMovies(String movieTitle, int page, int pageSize,
          List<String> ratings, String sortBy, String sortDirection) {
      if (page < 1 || pageSize < 1) {
        throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.LESS_THAN_ZERO.getMessage());
      }

      List<String> movieFieldNames = utils.getEntityFields(Movie.class);

      if (!movieFieldNames.contains(sortBy)) {
        throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
      }

      Sort.Direction direction = Sort.Direction.fromString(sortDirection);

      Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

      Page<Movie> moviePages = movieRepository.searchMovies(movieTitle, ratings, pageable);
      long count = movieRepository.countMovies(movieTitle, ratings);

      ApiPagination<Movie> moviePagination = ApiPagination.<Movie>builder()
          .result(moviePages.getContent())
          .count(count)
          .build();
      
      return moviePagination;
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
