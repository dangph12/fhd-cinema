package com.company.project.module.showtimes.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShowtimeUpdateRequest {

    @NotEmpty(message = "EMPTY_SHOWTIME")
    String movieId;

    @NotEmpty(message = "EMPTY_SHOWTIME")
    String screenId;

    @Min(value = 0, message = "NEGATIVE_VALUE")
    @NotEmpty(message = "EMPTY_SHOWTIME")
    int showtimePrice;

    @NotEmpty(message = "EMPTY_SHOWTIME")
    LocalDateTime showtimeAt;

}
