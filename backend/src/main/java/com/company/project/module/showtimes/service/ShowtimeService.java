package com.company.project.module.showtimes.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.repository.MovieRepository;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.repository.ScreenRepository;
import com.company.project.module.showtimes.common.ShowtimeStatusMessage;
import com.company.project.module.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.module.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.exception.ShowtimeException;
import com.company.project.module.showtimes.repository.ShowtimeRepository;
import com.company.project.utils.Utils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ShowtimeService {

    private final ShowtimeRepository showtimeRepository;
    private final MovieRepository movieRepository;
    private final ScreenRepository screenRepository;
    private final Utils utils;

    public ShowtimeService(ShowtimeRepository showtimeRepository, MovieRepository movieRepository, ScreenRepository screenRepository, Utils utils) {
        this.showtimeRepository = showtimeRepository;
        this.movieRepository = movieRepository;
        this.screenRepository = screenRepository;
        this.utils = utils;
    }


    public List<Showtime> getAllShowtimes() {
        return showtimeRepository.findAll();
    }

    public Showtime getShowtimeById(String showtimeId) {
        return showtimeRepository.findById(showtimeId).orElseThrow(() -> new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.NOT_EXIST.getMessage()));
    }

    public Showtime createShowtime(ShowtimeCreationRequest request) {
        Movie movie = movieRepository.findById(request.getMovieId())
                .orElseThrow(() -> new ShowtimeException(Status.FAIL.getValue(), "Invalid Movie ID"));

        Screen screen = screenRepository.findById(request.getScreenId())
                .orElseThrow(() -> new ShowtimeException(Status.FAIL.getValue(), "Invalid Screen ID"));

        Showtime showtime = Showtime.builder()
                .movie(movie)
                .screen(screen)
                .showtimePrice(request.getShowtimePrice())
                .showtimeAt(request.getShowtimeAt())
                .build();

        return showtimeRepository.save(showtime);
    }

    public Showtime updateShowtime(String showtimeId, ShowtimeUpdateRequest request) {
        if(!showtimeRepository.existsByShowtimeId(showtimeId)) {
            throw new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.NOT_EXIST.getMessage());
        }

        Movie movie = movieRepository.findById(request.getMovieId())
                .orElseThrow(() -> new ShowtimeException(Status.FAIL.getValue(), "Invalid Movie ID"));

        Screen screen = screenRepository.findById(request.getScreenId())
                .orElseThrow(() -> new ShowtimeException(Status.FAIL.getValue(), "Invalid Screen ID"));

        Showtime existedShowtime = getShowtimeById(showtimeId);

        existedShowtime.setMovie(movie);
        existedShowtime.setScreen(screen);
        existedShowtime.setShowtimePrice(request.getShowtimePrice());
        existedShowtime.setShowtimeAt(request.getShowtimeAt());

        return showtimeRepository.save(existedShowtime);
    }

    public void deleteShowtime(String showtimeId) {
        if(!showtimeRepository.existsByShowtimeId(showtimeId)) {
            throw new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.NOT_EXIST.getMessage());
        }

        showtimeRepository.deleteById(showtimeId);

    }

    public ApiPagination<Showtime> filterShowtimes(String showtimeId, int page, int pageSize,
          List<String> cinemaName, String sortBy, String sortDirection) {
      if (page < 1 || pageSize < 1) {
        throw new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.LESS_THAN_ZERO.getMessage());
      }

      List<String> showtimeFieldNames = utils.getEntityFields(Showtime.class);

      if (!showtimeFieldNames.contains(sortBy)) {
        throw new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
      }

      Sort.Direction direction = Sort.Direction.fromString(sortDirection);

      Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

      Page<Showtime> showtimePages = showtimeRepository.searchShowtimes(showtimeId, cinemaName, pageable);
      long count = showtimeRepository.countMovies(showtimeId, cinemaName);

      ApiPagination<Showtime> showtimePagination = ApiPagination.<Showtime>builder()
          .result(showtimePages.getContent())
          .count(count)
          .build();
      
      return showtimePagination;
    }

}
