package com.company.project.module.ratings.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.ratings.common.RatingStatusMessage;
import com.company.project.module.ratings.dto.request.RatingCreationRequest;
import com.company.project.module.ratings.dto.response.RatingDto;
import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.ratings.exception.RatingException;
import com.company.project.module.ratings.repository.RatingRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class RatingService {

  private final RatingRepository ratingRepository;
  private final ModelMapper modelMapper;
  private final Utils utils;

  public RatingService(RatingRepository ratingRepository, Utils utils, ModelMapper modelMapper) {
    this.ratingRepository = ratingRepository;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private RatingDto convertToRatingDto(Rating rating) {
    return modelMapper.map(rating, RatingDto.class);
  }

  public List<RatingDto> getAllRatings() {
    List<Rating> ratings = ratingRepository.findAllByIsDeletedFalse();

    List<RatingDto> ratingDtos = new ArrayList<>();

    for (Rating rating : ratings) {
      RatingDto ratingDto = this.convertToRatingDto(rating);
      ratingDtos.add(ratingDto);
    }

    return ratingDtos;
  }

  public Rating getRatingById(String ratingId) {
    Rating rating = ratingRepository.findByRatingIdAndIsDeletedFalse(ratingId);

    if (rating == null) {
      throw new RatingException(
          Status.FAIL.getValue(), RatingStatusMessage.NOT_EXIST.getMessage());
    }

    return rating;
  }

  public RatingDto getRatingDtoById(String ratingId) {
    Rating rating = this.getRatingById(ratingId);
    return this.convertToRatingDto(rating);
  }

  public ApiPagination<RatingDto> filterRatings(String ratingName, int page, int pageSize,
      String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new RatingException(Status.FAIL.getValue(), RatingStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> ratingFieldNames = utils.getEntityFields(Rating.class);

    if (!ratingFieldNames.contains(sortBy)) {
      throw new RatingException(Status.FAIL.getValue(), RatingStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);

    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Rating> ratingPages = ratingRepository.findByRatingNameContainingIgnoreCaseAndIsDeletedFalse(ratingName,
        pageable);
    long count = ratingRepository.countByRatingNameContainingIgnoreCaseAndIsDeletedFalse(ratingName);

    List<RatingDto> ratingDtos = ratingPages.getContent().stream()
        .map(this::convertToRatingDto)
        .collect(Collectors.toList());

    ApiPagination<RatingDto> ratingPagination = ApiPagination.<RatingDto>builder()
        .result(ratingDtos)
        .count(count)
        .build();

    return ratingPagination;
  }

  public RatingDto createRating(RatingCreationRequest request) {
    if (ratingRepository.existsByRatingNameAndIsDeletedFalse(request.getRatingName())) {
      throw new RatingException(Status.FAIL.getValue(), RatingStatusMessage.EXIST_NAME.getMessage());
    }
    Rating rating = Rating.builder()
        .ratingName(request.getRatingName())
        .ratingDescription(request.getRatingDescription())
        .build();

    ratingRepository.save(rating);
    return this.convertToRatingDto(rating);
  }

  public RatingDto updateRating(String ratingId, RatingCreationRequest request) {
    Rating existedRating = this.getRatingById(ratingId);

    if (!existedRating.getRatingName().equals(request.getRatingName())
        && ratingRepository.existsByRatingNameAndIsDeletedFalse(request.getRatingName())) {
      throw new RatingException(Status.FAIL.getValue(), RatingStatusMessage.EXIST_NAME.getMessage());
    }

    existedRating.setRatingDescription(request.getRatingDescription());

    if (!existedRating.getRatingName().equals(request.getRatingName())) {
      existedRating.setRatingName(request.getRatingName());
    }

    ratingRepository.save(existedRating);

    return this.convertToRatingDto(existedRating);
  }

  public void deleteRating(String ratingId) {
    Rating existedRating = this.getRatingById(ratingId);

    existedRating.getMovies().forEach(movie -> {
      movie.setDeleted(true);
    });
    existedRating.setDeleted(true);

    ratingRepository.save(existedRating);
  }

}
