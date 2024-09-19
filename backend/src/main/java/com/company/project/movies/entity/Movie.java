package com.company.project.movies.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "movies")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String movieId;
    String ratingId;
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
}
