package com.company.project.module.cinemas.entity;

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

import com.company.project.module.locations.entity.Location;
import com.company.project.module.screens.entity.Screen;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name = "cinemas")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Cinema {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "cinema_id")
    String cinemaId;

    String cinemaName;

    @JsonIgnore
    @OneToMany(mappedBy = "cinema")
    List<Screen> screens;

    @ManyToOne
    @JoinColumn(name="location_id", nullable=false)
    Location location;

    @Builder.Default
    boolean isDeleted = false;
}
