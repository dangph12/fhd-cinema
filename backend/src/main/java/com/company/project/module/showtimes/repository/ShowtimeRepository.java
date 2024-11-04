package com.company.project.module.showtimes.repository;

import java.time.LocalDateTime;
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
      "(:movieTitle IS NULL OR LOWER(s.movie.movieTitle) LIKE LOWER(CONCAT('%', :movieTitle, '%'))) AND " +
      "(:cinemaNames IS NULL OR (s.screen.cinema.isDeleted = false AND s.screen.cinema.cinemaName IN :cinemaNames)) AND " +
      "(:startDate IS NULL OR s.showtimeAt >= :startDate) AND " +
      "(:endDate IS NULL OR s.showtimeAt <= :endDate)")
  Page<Showtime> searchShowtimes(
      @Param("movieTitle") String movieTitle,
      @Param("cinemaNames") List<String> cinemaNames,
      @Param("startDate") LocalDateTime startDate,
      @Param("endDate") LocalDateTime endDate,
      Pageable pageable);

  @Query("SELECT s FROM Showtime s WHERE " +
      "s.isDeleted = false AND " +
      "(:movieTitle IS NULL OR LOWER(s.movie.movieTitle) LIKE LOWER(CONCAT('%', :movieTitle, '%'))) AND " +
      "(:cinemaNames IS NULL OR (s.screen.cinema.isDeleted = false AND s.screen.cinema.cinemaName IN :cinemaNames)) AND " +
      "(:startDate IS NULL OR s.showtimeAt >= :startDate) AND " +
      "(:endDate IS NULL OR s.showtimeAt <= :endDate)")
  List<Showtime> searchShowtimesWithoutPagination(
      @Param("movieTitle") String movieTitle,
      @Param("cinemaNames") List<String> cinemaNames,
      @Param("startDate") LocalDateTime startDate,
      @Param("endDate") LocalDateTime endDate);

  @Query("SELECT COUNT(s) FROM Showtime s WHERE " +
      "s.isDeleted = false AND " +
      "(:movieTitle IS NULL OR LOWER(s.movie.movieTitle) LIKE LOWER(CONCAT('%', :movieTitle, '%'))) AND " +
      "(:cinemaNames IS NULL OR (s.screen.cinema.isDeleted = false AND s.screen.cinema.cinemaName IN :cinemaNames)) AND " +
      "(:startDate IS NULL OR s.showtimeAt >= :startDate) AND " +
      "(:endDate IS NULL OR s.showtimeAt <= :endDate)")
  long countShowtimes(@Param("movieTitle") String movieTitle,
      @Param("cinemaNames") List<String> cinemaNames,
      @Param("startDate") LocalDateTime startDate,
      @Param("endDate") LocalDateTime endDate);

  @Query("SELECT COUNT(DISTINCT s.movie.movieTitle) FROM Showtime s WHERE " +
      "s.isDeleted = false AND " +
      "(:movieTitle IS NULL OR LOWER(s.movie.movieTitle) LIKE LOWER(CONCAT('%', :movieTitle, '%'))) AND " +
      "(:cinemaNames IS NULL OR (s.screen.cinema.isDeleted = false AND s.screen.cinema.cinemaName IN :cinemaNames)) AND " +
      "(:startDate IS NULL OR s.showtimeAt >= :startDate) AND " +
      "(:endDate IS NULL OR s.showtimeAt <= :endDate)")
  long countDistinctMovies(@Param("movieTitle") String movieTitle,
      @Param("cinemaNames") List<String> cinemaNames,
      @Param("startDate") LocalDateTime startDate,
      @Param("endDate") LocalDateTime endDate);
}
