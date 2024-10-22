package com.company.project.module.ratings.repository;

import com.company.project.module.ratings.entity.Rating;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends JpaRepository<Rating, String> {
    boolean existsByRatingId(String ratingId);
    Page<Rating> findByRatingNameContainingIgnoreCase(String ratingName, Pageable pageable);
    long countByRatingNameContainingIgnoreCase(String ratingName);
}
