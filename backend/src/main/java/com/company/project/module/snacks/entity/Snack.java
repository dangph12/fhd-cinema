package com.company.project.module.snacks.entity;

import com.company.project.module.bookings.entity.Booking;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "snacks")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Snack {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String snackId;

    String snackName;
    int snackPrice;

    @JsonIgnore
    @ManyToMany
    List<Booking> bookings;

}
