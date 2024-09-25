package com.company.project.module.showtimes.entity;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.movies.entity.Movie;
import com.company.project.module.screens.entity.Screen;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.List;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "showtimes")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Showtime {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String showtimeId;

    @PositiveOrZero
    int showtimePrice;
    LocalDateTime showtimeAt;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="movie_id", nullable=false)
    Movie movie;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="screen_id", nullable=false)
    Screen screen;

    @JsonIgnore
    @OneToMany(mappedBy = "showtime")
    List<Booking> bookings;
}
