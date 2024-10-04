package com.company.project.module.news.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class NewsCreationRequest {

    @NotEmpty(message = "EMPTY_TITLE")
    String newsTitle;

    @NotEmpty(message = "EMPTY_DESCRIPTION")
    String newsDescription;

    @NotNull(message = "EMPTY_CREATE_DATE")
    LocalDateTime newsCreateAt;

    @NotEmpty(message = "EMPTY_IMAGE_URL")
    String newsImageUrl;

}
