package com.company.project.showtimes.service;

import com.company.project.showtimes.dto.request.ShowtimeCreationRequest;
import com.company.project.showtimes.dto.request.ShowtimeUpdateRequest;
import com.company.project.showtimes.entity.Showtime;
import com.company.project.showtimes.exception.ErrorCode;
import com.company.project.showtimes.exception.ShowtimeException;
import com.company.project.showtimes.repository.ShowtimeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowtimeService {
    @Autowired
    private ShowtimeRepository showtimeRepository;

    public List<Showtime> getAllShowtimes() {
        return showtimeRepository.findAll();
    }

    public Showtime getShowtimeById(String showtimeId) {
        return showtimeRepository.findById(showtimeId).orElseThrow(() -> new RuntimeException("Showtime not found"));
    }

    public Showtime createShowtime(ShowtimeCreationRequest request) {
        Showtime showtime = new Showtime();

        showtime.setMovieId(request.getMovieId());
        showtime.setScreenId(request.getScreenId());
        showtime.setShowtimePrice(request.getShowtimePrice());
        showtime.setShowtimeAt(request.getShowtimeAt());

        return showtimeRepository.save(showtime);
    }

    public Showtime updateShowtime(String showtimeId, ShowtimeUpdateRequest request) {
        if(!showtimeRepository.existsByShowtimeId(showtimeId)) {
            throw new ShowtimeException(ErrorCode.SHOWTIME_NOT_FOUND);
        }

        Showtime existedShowtime = getShowtimeById(showtimeId);

        existedShowtime.setMovieId(request.getMovieId());
        existedShowtime.setScreenId(request.getScreenId());
        existedShowtime.setShowtimePrice(request.getShowtimePrice());
        existedShowtime.setShowtimeAt(request.getShowtimeAt());

        return showtimeRepository.save(existedShowtime);
    }

    public ErrorCode deleteShowtime(String showtimeId) {
        if(!showtimeRepository.existsByShowtimeId(showtimeId)) {
            throw new ShowtimeException(ErrorCode.SHOWTIME_NOT_FOUND);
        }

        showtimeRepository.deleteById(showtimeId);

        return ErrorCode.DELETE_SHOWTIME_SUCCESSFULLY;
    }

}
