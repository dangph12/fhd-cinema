package com.company.project.module.ratings.service;

import com.company.project.common.Status;
import com.company.project.module.ratings.common.RatingStatusMessage;
import com.company.project.module.ratings.dto.request.RatingCreationRequest;
import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.ratings.exception.RatingException;
import com.company.project.module.ratings.repository.RatingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    public final RatingRepository ratingRepository;

    public RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Rating getRatingById(String ratingId) {
        return ratingRepository.findById(ratingId).orElseThrow(() -> new RatingException(Status.FAIL.getValue(), RatingStatusMessage.NOT_EXIST.getMessage()));
    }

    public Rating createRating(RatingCreationRequest request) {
        Rating rating = Rating.builder()
                .ratingName(request.getRatingName())
                .ratingDescription(request.getRatingDescription())
                .build();

        return ratingRepository.save(rating);
    }

    public Rating updateRating(String ratingId, RatingCreationRequest request) {
        Rating existedRating = getRatingById(ratingId);

        existedRating.setRatingName(request.getRatingName());
        existedRating.setRatingDescription(request.getRatingDescription());

        return ratingRepository.save(existedRating);
    }

    public void deleteRating(String ratingId) {
        if(!ratingRepository.existsByRatingId(ratingId)) {
            throw new RatingException(Status.FAIL.getValue(), RatingStatusMessage.NOT_EXIST.getMessage());
        }

        ratingRepository.deleteById(ratingId);
    }

}
