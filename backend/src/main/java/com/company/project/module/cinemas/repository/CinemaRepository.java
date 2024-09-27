package com.company.project.module.cinemas.repository;

import com.company.project.module.cinemas.entity.Cinema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, String> {
    boolean existsByCinemaName(String cinemaName);
    boolean existsByCinemaId(String cinemaId);
}
