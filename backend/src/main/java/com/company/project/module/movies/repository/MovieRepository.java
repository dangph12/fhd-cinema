package com.company.project.module.movies.repository;

import com.company.project.module.movies.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, String> {
    boolean existsByMovieTitle(String movieTitle);
}
