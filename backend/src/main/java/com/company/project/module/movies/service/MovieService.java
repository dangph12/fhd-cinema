package com.company.project.module.movies.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.movies.common.MovieStatusMessage;
import com.company.project.module.movies.dto.request.MovieCreationRequest;
import com.company.project.module.movies.dto.request.MovieUpdateRequest;
import com.company.project.module.movies.dto.response.MovieDto;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.exception.MovieException;
import com.company.project.module.movies.repository.MovieRepository;
import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.ratings.repository.RatingRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
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
  private final ModelMapper modelMapper;

  public MovieService(MovieRepository movieRepository, RatingRepository ratingRepository, Utils utils,
      ModelMapper modelMapper) {
    this.movieRepository = movieRepository;
    this.ratingRepository = ratingRepository;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private MovieDto convertToMovieDto(Movie movie) {
    return modelMapper.map(movie, MovieDto.class);
  }

  public List<MovieDto> getAllMovies() {
    List<Movie> movies = movieRepository.findAllByIsDeletedFalse();
    return movies.stream()
        .map(this::convertToMovieDto)
        .collect(Collectors.toList());
  }

  public Movie getMovieById(String movieId) {
    Movie movie = movieRepository.findByMovieIdAndIsDeletedFalse(movieId);
    if (movie == null) {
      throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.NOT_EXIST.getMessage());
    }
    return movie;
  }

  public MovieDto getMovieDtoById(String movieId) {
    Movie movie = this.getMovieById(movieId);
    return this.convertToMovieDto(movie);
  }

  public List<MovieDto> getMovieByTitle(String movieTitle) {
    List<Movie> movies = movieRepository.findByMovieTitleContainingIgnoreCaseAndIsDeletedFalse(movieTitle);
    return movies.stream()
        .map(this::convertToMovieDto)
        .collect(Collectors.toList());
  }

  public ApiPagination<MovieDto> filterMovies(String movieTitle, int page, int pageSize,
      List<String> ratings, List<String> status, String sortBy, String sortDirection) {

    if (page < 1 || pageSize < 1) {
      throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> movieFieldNames = utils.getEntityFields(Movie.class);
    if (!movieFieldNames.contains(sortBy)) {
      throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);
    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Movie> moviePages = movieRepository.searchMovies(movieTitle, ratings, status, pageable);
    long count = movieRepository.countMovies(movieTitle, ratings, status);

    List<MovieDto> movieDtos = moviePages.getContent().stream()
        .map(this::convertToMovieDto)
        .collect(Collectors.toList());

    return ApiPagination.<MovieDto>builder()
        .result(movieDtos)
        .count(count)
        .build();
  }

  public MovieDto createMovie(MovieCreationRequest request) {

    if (movieRepository.existsByMovieTitleAndIsDeletedFalse(request.getMovieTitle())) {
      throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.MOVIE_EXIST.getMessage());
    }

    Rating rating = ratingRepository.findById(request.getRatingId())
        .orElseThrow(() -> new MovieException(Status.FAIL.getValue(), "Invalid Rating ID"));

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
        .rating(rating)
        .build();

    movieRepository.save(movie);
    return this.convertToMovieDto(movie);
  }

  public MovieDto updateMovie(String movieId, MovieUpdateRequest request) {
    Movie existedMovie = this.getMovieById(movieId);

    if (!existedMovie.getMovieTitle().equals(request.getMovieTitle()) &&
        movieRepository.existsByMovieTitleAndIsDeletedFalse(request.getMovieTitle())) {
      throw new MovieException(Status.FAIL.getValue(), MovieStatusMessage.MOVIE_EXIST.getMessage());
    }

    Rating rating = ratingRepository.findById(request.getRatingId())
        .orElseThrow(() -> new MovieException(Status.FAIL.getValue(), "Invalid Rating ID"));

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
    existedMovie.setRating(rating);

    movieRepository.save(existedMovie);
    return this.convertToMovieDto(existedMovie);
  }

  public void deleteMovieById(String movieId) {
    Movie existedMovie = this.getMovieById(movieId);

    existedMovie.getShowtimes().forEach(showtime -> {
      showtime.setDeleted(true);
    });

    existedMovie.setDeleted(true);
    movieRepository.save(existedMovie);
  }
}
