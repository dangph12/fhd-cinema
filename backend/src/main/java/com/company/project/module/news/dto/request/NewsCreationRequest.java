package com.company.project.module.news.dto.request;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

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

    @NotEmpty(message = "EMPTY_CATEGORY")
    String newsCategoryId;

}
