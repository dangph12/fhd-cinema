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
  boolean existsByShowtimeIdAndIsDeletedFalse(String showtimeId);

  boolean existsByMovie_MovieIdAndIsDeletedFalse(String movieId);

  boolean existsByScreen_ScreenIdAndIsDeletedFalse(String screenId);

  List<Showtime> findAllByIsDeletedFalse();

  Showtime findByShowtimeIdAndIsDeletedFalse(String newsId);

  @Query("SELECT s FROM Showtime s WHERE " +
      "s.isDeleted = false AND " +
      "(:showtimeId IS NULL OR LOWER(s.showtimeId) LIKE LOWER(CONCAT('%', :showtimeId, '%'))) AND " +
      "(:movieTitles IS NULL OR (s.movie.isDeleted = false AND s.movie.movieTitle IN :movieTitles)) AND " +
      "(:cinemaNames IS NULL OR (s.screen.cinema.isDeleted = false AND s.screen.cinema.cinemaName IN :cinemaNames))")
  Page<Showtime> searchShowtimes(@Param("showtimeId") String showtimeId,
      @Param("movieTitles") List<String> movieTitles,
      @Param("cinemaNames") List<String> cinemaNames,
      Pageable pageable);

  @Query("SELECT COUNT(s) FROM Showtime s WHERE " +
      "s.isDeleted = false AND " +
      "(:showtimeId IS NULL OR LOWER(s.showtimeId) LIKE LOWER(CONCAT('%', :showtimeId, '%'))) AND " +
      "(:movieTitles IS NULL OR (s.movie.isDeleted = false AND s.movie.movieTitle IN :movieTitles)) AND " +
      "(:cinemaNames IS NULL OR (s.screen.cinema.isDeleted = false AND s.screen.cinema.cinemaName IN :cinemaNames))")
  long countShowtimes(@Param("showtimeId") String showtimeId,
      @Param("movieTitles") List<String> movieTitles,
      @Param("cinemaNames") List<String> cinemaNames);
}
