package com.company.project.module.cinemas.dto.request;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CinemaCreationRequest {

    @NotEmpty(message = "EMPTY_LOCATION_ID")
    String locationId;

    @NotEmpty(message = "EMPTY_NAME")
    String cinemaName;

}
