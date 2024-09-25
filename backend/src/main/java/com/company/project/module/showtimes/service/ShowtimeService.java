package com.company.project.module.showtimes.service;

import com.company.project.common.Status;
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

    public ShowtimeService(ShowtimeRepository showtimeRepository) {
        this.showtimeRepository = showtimeRepository;
    }

    public List<Showtime> getAllShowtimes() {
        return showtimeRepository.findAll();
    }

    public Showtime getShowtimeById(String showtimeId) {
        return showtimeRepository.findById(showtimeId).orElseThrow(() -> new ShowtimeException(Status.FAIL.getValue(), ShowtimeStatusMessage.NOT_EXIST.getMessage()));
    }

    public Showtime createShowtime(ShowtimeCreationRequest request) {
        Showtime showtime = Showtime.builder()
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
