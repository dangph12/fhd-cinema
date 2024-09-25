package com.company.project.module.showtimes.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShowtimeCreationRequest {

    @NotEmpty(message = "EMPTY_SHOWTIME")
    String movieId;

    @NotEmpty(message = "EMPTY_SHOWTIME")
    String screenId;

    @Min(value = 0, message = "NEGATIVE_VALUE")
    int showtimePrice;

    @NotNull(message = "EMPTY_SHOWTIME")
    LocalDateTime showtimeAt;

}
