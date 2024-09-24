package com.company.project.module.screens.entity;

import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.showtimes.entity.Showtime;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "screens")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Screen {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String screenId;

    String screenName;


    @OneToMany(mappedBy = "screen")
    List<Showtime> showtimes;

    @ManyToOne
    @JoinColumn(name="cinema_id",nullable=false)
    Cinema cinema;

    @OneToMany(mappedBy = "screen")
    List<Seat> seats;

}
