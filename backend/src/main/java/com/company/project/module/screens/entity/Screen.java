package com.company.project.module.screens.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.showtimes.entity.Showtime;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "screens")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Screen {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String screenId;

    String screenName;

    @JsonIgnore
    @OneToMany(mappedBy = "screen")
    List<Showtime> showtimes;

    @ManyToOne
    @JoinColumn(name="cinema_id",nullable=false)
    Cinema cinema;

    @JsonIgnore
    @OneToMany(mappedBy = "screen")
    List<Seat> seats;

    @Builder.Default
    boolean isDeleted = false;
}
