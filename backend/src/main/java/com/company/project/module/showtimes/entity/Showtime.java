package com.company.project.module.showtimes.entity;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.screens.entity.Screen;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;


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

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="screen_id", nullable=false)
    Screen screen;

    @JsonIgnore
    @OneToMany(mappedBy = "showtime")
    List<Booking> bookings;
}
