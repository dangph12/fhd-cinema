package com.company.project.movies.dto.request;

import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class MovieCreationRequest {
    private String ratingId;
    private String movieTitle;
    private String movieGenre;
    private String movieDirector;
    private String movieCast;
    private String movieStatus;
    private String movieFormat;
    private int movieDurationMinute;
    private Date movieReleaseDate;
    private String movieTrailerUrl;
    private String movieDescription;
    private String movieLanguage;
    private String moviePosterUrl;
}
