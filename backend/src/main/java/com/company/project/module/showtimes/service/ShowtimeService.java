package com.company.project.module.showtimes.service;

import com.company.project.common.Status;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.movies.exception.MovieException;
import com.company.project.module.movies.repository.MovieRepository;
import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.exception.ScreenException;
import com.company.project.module.screens.repository.ScreenRepository;
import com.company.project.module.showtimes.common.ShowtimeStatusMessage;
import com.company.project.module.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.module.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.module.showtimes.entity.Showtime;
import com.company.project.module.showtimes.exception.ShowtimeException;
import com.company.project.module.showtimes.repository.ShowtimeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowtimeService {

    private final ShowtimeRepository showtimeRepository;
    private final MovieRepository movieRepository;
    private final ScreenRepository screenRepository;

//    public ShowtimeService(ShowtimeRepository showtimeRepository) {
//        this.showtimeRepository = showtimeRepository;
//    }

    public ShowtimeService(ShowtimeRepository showtimeRepository, MovieRepository movieRepository, ScreenRepository screenRepository) {
        this.showtimeRepository = showtimeRepository;
        this.movieRepository = movieRepository;
        this.screenRepository = screenRepository;
    }


    public List<Showtime> getAllShowtimes() {
        return showtimeRepository.findAll();
    }

    public Showtime getShowtimeById(String showtimeId) {
        return showtimeRepository.findById(showtimeId).orElseThrow(() -> new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.NOT_EXIST.getMessage()));
    }

    public Showtime createShowtime(ShowtimeCreationRequest request) {

        Movie movie = movieRepository.findById(request.getMovieId())
                .orElseThrow(() -> new MovieException(Status.FAIL.getValue(), "Invalid Movie ID"));

        Screen screen = screenRepository.findById(request.getScreenId())
                .orElseThrow(() -> new ScreenException(Status.FAIL.getValue(), "Invalid Screen ID"));

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

        Showtime existedShowtime = getShowtimeById(showtimeId);

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

}
