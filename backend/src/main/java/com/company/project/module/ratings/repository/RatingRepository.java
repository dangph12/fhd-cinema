package com.company.project.module.ratings.repository;

import com.company.project.module.ratings.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, String> {
    boolean existsByRatingId(String ratingId);
}
