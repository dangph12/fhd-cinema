package com.company.project.module.showtimes.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.screens.entity.Screen;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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
@Table(name = "showtimes")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Showtime {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String showtimeId;

    int showtimePrice;
    LocalDateTime showtimeAt;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="movie_id", nullable=false)
    Movie movie;

    @JsonProperty("movieId")
    public String getMovieId() {
        return this.movie.getMovieId();
    }

    @ManyToOne
    @JoinColumn(name="screen_id", nullable=false)
    Screen screen;

    @JsonIgnore
    @OneToMany(mappedBy = "showtime")
    List<Booking> bookings;

    @Builder.Default
    boolean isDeleted = false;
}
