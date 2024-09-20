package com.company.project.movies.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MovieUpdateRequest {

    @NotNull(message = "Rating id cannot be null")
    String ratingId;

    @NotNull(message = "Movie title cannot be null")
    String movieTitle;

    @NotNull(message = "Movie genre cannot be null")
    String movieGenre;

    @NotNull(message = "Movie director cannot be null")
    String movieDirector;

    @NotNull(message = "Movie cast cannot be null")
    String movieCast;

    @NotNull(message = "Movie status cannot be null")
    String movieStatus;

    @NotNull(message = "Movie format cannot be null")
    String movieFormat;

    @NotNull(message = "Movie duration minute cannot be null")
    int movieDurationMinute;

    @NotNull(message = "Movie release date cannot be null")
    Date movieReleaseDate;

    @NotNull(message = "Movie trailer url cannot be null")
    String movieTrailerUrl;

    @NotNull(message = "Movie description cannot be null")
    String movieDescription;

    @NotNull(message = "Movie language cannot be null")
    String movieLanguage;

    @NotNull(message = "Movie poster url cannot be null")
    String moviePosterUrl;

}
