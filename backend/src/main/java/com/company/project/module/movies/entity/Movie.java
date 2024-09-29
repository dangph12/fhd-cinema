package com.company.project.module.movies.entity;

import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.showtimes.entity.Showtime;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "movies")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "movie_id")
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

    @ManyToOne
    @JoinColumn(name = "rating_id")
    Rating rating;

    @OneToMany(mappedBy = "movie")
    List<Showtime> showtimes;
}
