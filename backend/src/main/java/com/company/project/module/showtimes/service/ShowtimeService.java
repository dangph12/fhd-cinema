package com.company.project.module.showtimes.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.service.MovieService;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.service.ScreenService;
import com.company.project.module.showtimes.common.ShowtimeStatusMessage;
import com.company.project.module.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.module.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.module.showtimes.dto.response.ShowtimeDto;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.exception.ShowtimeException;
import com.company.project.module.showtimes.repository.ShowtimeRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ShowtimeService {

  private final ShowtimeRepository showtimeRepository;
  private final MovieService movieService;
  private final ScreenService screenService;
  private final Utils utils;
  private final ModelMapper modelMapper;

  public ShowtimeService(ShowtimeRepository showtimeRepository, MovieService movieService,
      ScreenService screenService, Utils utils, ModelMapper modelMapper) {
    this.showtimeRepository = showtimeRepository;
    this.movieService = movieService;
    this.screenService = screenService;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private ShowtimeDto convertToShowtimeDto(Showtime showtime) {
    return modelMapper.map(showtime, ShowtimeDto.class);
  }

  public List<ShowtimeDto> getAllShowtimes() {
    List<Showtime> showtimes = showtimeRepository.findAllByIsDeletedFalse();
    return showtimes.stream()
        .map(this::convertToShowtimeDto)
        .collect(Collectors.toList());
  }

  public Showtime getShowtimeById(String showtimeId) {
    Showtime showtime = showtimeRepository.findByShowtimeIdAndIsDeletedFalse(showtimeId);
    if (showtime == null) {
      throw new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.NOT_EXIST.getMessage());
    }
    return showtime;
  }

  public ShowtimeDto getShowtimeDtoById(String showtimeId) {
    Showtime showtime = this.getShowtimeById(showtimeId);
    return this.convertToShowtimeDto(showtime);
  }

  public ApiPagination<ShowtimeDto> filterShowtimes(String showtimeId, int page, int pageSize,
      List<String> movieTitles, List<String> cinemaNames, String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> showtimeFieldNames = utils.getEntityFields(Showtime.class);
    if (!showtimeFieldNames.contains(sortBy)) {
      throw new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);
    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Showtime> showtimePages = showtimeRepository.searchShowtimes(showtimeId, movieTitles, cinemaNames, pageable);
    long count = showtimeRepository.countShowtimes(showtimeId, movieTitles, cinemaNames);

    List<ShowtimeDto> showtimeDtos = showtimePages.getContent().stream()
        .map(this::convertToShowtimeDto)
        .collect(Collectors.toList());

    return ApiPagination.<ShowtimeDto>builder()
        .result(showtimeDtos)
        .count(count)
        .build();
  }

  public ShowtimeDto createShowtime(ShowtimeCreationRequest request) {
    Movie movie = movieService.getMovieById(request.getMovieId());

    Screen screen = screenService.getScreenById(request.getScreenId());

    Showtime showtime = Showtime.builder()
        .movie(movie)
        .screen(screen)
        .showtimePrice(request.getShowtimePrice())
        .showtimeAt(request.getShowtimeAt())
        .build();

    showtimeRepository.save(showtime);
    return this.convertToShowtimeDto(showtime);
  }

  public ShowtimeDto updateShowtime(String showtimeId, ShowtimeUpdateRequest request) {
    Showtime existedShowtime = this.getShowtimeById(showtimeId);

    Movie movie = movieService.getMovieById(request.getMovieId());

    Screen screen = screenService.getScreenById(request.getScreenId());

    existedShowtime.setMovie(movie);
    existedShowtime.setScreen(screen);
    existedShowtime.setShowtimePrice(request.getShowtimePrice());
    existedShowtime.setShowtimeAt(request.getShowtimeAt());

    showtimeRepository.save(existedShowtime);
    return this.convertToShowtimeDto(existedShowtime);
  }

  public void deleteShowtime(String showtimeId) {
    Showtime existedShowtime = this.getShowtimeById(showtimeId);
    existedShowtime.setDeleted(true);
    showtimeRepository.save(existedShowtime);
  }
}
