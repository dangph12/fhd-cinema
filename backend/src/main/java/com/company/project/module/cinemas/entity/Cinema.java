package com.company.project.module.cinemas.entity;

import com.company.project.module.locations.entity.Location;
import com.company.project.module.screens.entity.Screen;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

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
}
