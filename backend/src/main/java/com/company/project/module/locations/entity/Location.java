package com.company.project.module.locations.entity;

import com.company.project.module.cinemas.entity.Cinema;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "locations")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String locationId;

    String locationName;

    @JsonIgnore
    @OneToMany(mappedBy = "location")
    List<Cinema> cinemas;
}
