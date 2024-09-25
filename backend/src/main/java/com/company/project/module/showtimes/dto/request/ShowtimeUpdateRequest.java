package com.company.project.module.showtimes.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShowtimeUpdateRequest {

    @NotNull(message = "Movie id cannot be null")
    String movieId;

    @NotNull(message = "Screen id cannot be null")
    String screenId;

    @PositiveOrZero
    @NotNull(message = "Showtime price cannot be null")
    int showtimePrice;

    @NotNull(message = "Showtime at cannot be null")
    LocalDateTime showtimeAt;

}
