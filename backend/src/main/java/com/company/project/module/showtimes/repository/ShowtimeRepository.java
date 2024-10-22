package com.company.project.module.showtimes.repository;

import java.util.List;

import com.company.project.module.showtimes.entity.Showtime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowtimeRepository extends JpaRepository<Showtime, String> {
    boolean existsByShowtimeId(String showtimeId);

    @Query("SELECT s FROM Showtime s WHERE " +
           "(:showtimeId IS NULL OR LOWER(s.showtimeId) LIKE LOWER(CONCAT('%', :showtimeId, '%'))) AND " +
           "(:cinemaNames IS NULL OR s.screen.cinema.cinemaName IN :cinemaNames)")
    Page<Showtime> searchShowtimes(@Param("showtimeId") String showtimeId,
                                   @Param("cinemaNames") List<String> cinemaNames,
                                   Pageable pageable);

    @Query("SELECT COUNT(s) FROM Showtime s WHERE " +
           "(:showtimeId IS NULL OR LOWER(s.showtimeId) LIKE LOWER(CONCAT('%', :showtimeId, '%'))) AND " +
           "(:cinemaNames IS NULL OR s.screen.cinema.cinemaName IN :cinemaNames)")
    long countMovies(@Param("showtimeId") String movieTitle,
                     @Param("cinemaNames") List<String> ratings);
}
