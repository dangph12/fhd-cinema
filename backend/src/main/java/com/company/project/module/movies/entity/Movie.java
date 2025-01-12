package com.company.project.module.movies.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.company.project.module.ratings.entity.Rating;
import com.company.project.module.showtimes.entity.Showtime;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

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
    
    @Builder.Default
    boolean isDeleted = false;
}
