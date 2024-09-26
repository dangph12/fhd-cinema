package com.company.project.module.ratings.dto.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RatingCreationRequest {

    @NotEmpty(message = "EMPTY_NAME")
    String ratingName;

    @NotEmpty(message = "EMPTY_DESCRIPTION")
    String ratingDescription;

}
