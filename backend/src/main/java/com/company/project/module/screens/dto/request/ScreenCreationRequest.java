package com.company.project.module.screens.dto.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ScreenCreationRequest {

    @NotEmpty(message = "EMPTY_CINEMA_ID")
    String cinemaId;

    @NotEmpty(message = "EMPTY_NAME")
    String screenName;

}
