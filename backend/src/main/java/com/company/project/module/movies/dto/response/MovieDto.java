package com.company.project.module.movies.dto.response;

import java.util.Date;
import java.util.List;

import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.showtimes.entity.Showtime;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MovieDto {
    String movieId;
    String movieTitle;
    String movieGenre;
    String movieDirector;
    String movieCast;
    String movieStatus;
    String movieFormat;
    int movieDurationMinute;
    Date movieReleaseDate;
    String movieTrailerUrl;
    String movieDescription;
    String movieLanguage;
    String moviePosterUrl;
    Rating rating;
    List<Showtime> showtimes;
}
