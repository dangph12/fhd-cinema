package com.company.project.module.seatstypes.entity;

import com.company.project.module.seats.entity.Seat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "seats_types")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class SeatType {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String seatTypeId;

    String seatTypeName;
    int seatTypePrice;

    @JsonIgnore
    @OneToMany(mappedBy = "seatType")
    List<Seat> seats;

}
