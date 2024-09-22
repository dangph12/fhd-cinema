package com.company.project.movies.repository;

import com.company.project.movies.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {
    boolean existsByMovieTitle(String movieTitle);
}
