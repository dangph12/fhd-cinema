package com.company.project.showtimes.repository;

import com.company.project.showtimes.entity.Showtime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowtimeRepository extends JpaRepository<Showtime, String> {
    boolean existsByShowtimeId(String showtimeId);
}
