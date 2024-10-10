package com.company.project.module.seats.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

import com.company.project.module.screens.entity.Screen;
import com.company.project.module.seatstypes.entity.SeatType;
import com.company.project.module.tickets.entity.Ticket;
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
@Table(name = "seats")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "seat_id")
    String seatId;

    String seatName;

    @Transient
    int price;

    public int getPrice() {
        return seatType.getSeatTypePrice();
    }

    @JsonIgnore
    @OneToOne(mappedBy = "seat")
    Ticket ticket;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="type_id", nullable=false)
    SeatType seatType;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="screen_id", nullable=false)
    Screen screen;

    @Column(name = "is_booked")
    boolean isBooked;
}
