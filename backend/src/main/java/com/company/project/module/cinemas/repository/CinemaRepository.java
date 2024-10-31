package com.company.project.module.cinemas.repository;

import java.util.List;

import com.company.project.module.cinemas.entity.Cinema;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, String> {

    boolean existsByCinemaNameAndIsDeletedFalse(String cinemaName);

    List<Cinema> findAllByIsDeletedFalseAndLocation_IsDeletedFalse();

    Cinema findByCinemaIdAndIsDeletedFalseAndLocation_IsDeletedFalse(String cinemaId);

    Page<Cinema> findByCinemaNameContainingIgnoreCaseAndIsDeletedFalseAndLocation_IsDeletedFalse(String cinemaName, Pageable pageable);

    long countByCinemaNameContainingIgnoreCaseAndIsDeletedFalseAndLocation_IsDeletedFalse(String cinemaName);
}
