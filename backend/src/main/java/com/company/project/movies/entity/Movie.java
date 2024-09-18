package com.company.project.movies.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String movieId;
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
