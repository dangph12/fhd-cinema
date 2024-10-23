package com.company.project.module.movies.repository;

import java.util.List;

import com.company.project.module.movies.entity.Movie;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {
    boolean existsByMovieTitle(String movieTitle);
    boolean existsByMovieId(String movieId);

    @Query("SELECT m FROM Movie m WHERE " +
           "(:movieTitle IS NULL OR LOWER(m.movieTitle) LIKE LOWER(CONCAT('%', :movieTitle, '%'))) AND " +
           "(:ratings IS NULL OR m.rating.ratingName IN :ratings) AND " +
           "(:status IS NULL OR m.movieStatus IN :status)")
    Page<Movie> searchMovies(@Param("movieTitle") String movieTitle,
                             @Param("ratings") List<String> ratings,
                             @Param("status") List<String> status,
                             Pageable pageable);

    @Query("SELECT COUNT(m) FROM Movie m WHERE " +
           "(:movieTitle IS NULL OR LOWER(m.movieTitle) LIKE LOWER(CONCAT('%', :movieTitle, '%'))) AND " +
           "(:ratings IS NULL OR m.rating.ratingName IN :ratings) AND " +
           "(:status IS NULL OR m.movieStatus IN :status)")
    long countMovies(@Param("movieTitle") String movieTitle,
                     @Param("ratings") List<String> ratings,
                     @Param("status") List<String> status);

}
