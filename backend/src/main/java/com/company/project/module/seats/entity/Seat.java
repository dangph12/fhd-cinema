package com.company.project.module.seats.entity;

import com.company.project.module.screens.entity.Screen;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.tickets.entity.Ticket;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "seats")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "seat_id")
    String seatId;

    String seatName;
    int seatPrice;

    @JsonIgnore
    @OneToOne(mappedBy = "seat")
    Ticket ticket;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="type_id", nullable=false)
    SeatType seatType;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="screen_id", nullable=false)
    Screen screen;
}
