package com.company.project.module.movies.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MovieCreationRequest {

    @NotEmpty(message = "EMPTY_MOVIE")
    String ratingId;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieTitle;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieGenre;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieDirector;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieCast;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieStatus;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieFormat;

    @Min(value = 0, message = "NEGATIVE_VALUE")
    @NotEmpty(message = "EMPTY_MOVIE")
    int movieDurationMinute;

    @NotEmpty(message = "EMPTY_MOVIE")
    Date movieReleaseDate;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieTrailerUrl;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieDescription;

    @NotEmpty(message = "EMPTY_MOVIE")
    String movieLanguage;

    @NotEmpty(message = "EMPTY_MOVIE")
    String moviePosterUrl;

}
