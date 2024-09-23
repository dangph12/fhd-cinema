package com.company.project.movies.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MovieUpdateRequest {

    @NotEmpty(message = "Rating id cannot be empty")
    String ratingId;

    @NotEmpty(message = "Movie title cannot be empty")
    String movieTitle;

    @NotEmpty(message = "Movie genre cannot be empty")
    String movieGenre;

    @NotEmpty(message = "Movie director cannot be empty")
    String movieDirector;

    @NotEmpty(message = "Movie cast cannot be empty")
    String movieCast;

    @NotEmpty(message = "Movie status cannot be empty")
    String movieStatus;

    @NotEmpty(message = "Movie format cannot be empty")
    String movieFormat;

    @Positive
    @NotEmpty(message = "Movie duration minute cannot be empty")
    int movieDurationMinute;

    @NotEmpty(message = "Movie release date cannot be empty")
    Date movieReleaseDate;

    @NotEmpty(message = "Movie trailer url cannot be empty")
    String movieTrailerUrl;

    @NotEmpty(message = "Movie description cannot be empty")
    String movieDescription;

    @NotEmpty(message = "Movie language cannot be empty")
    String movieLanguage;

    @NotEmpty(message = "Movie poster url cannot be empty")
    String moviePosterUrl;

}
