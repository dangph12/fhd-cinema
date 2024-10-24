package com.company.project.module.news.dto.response;

import java.time.LocalDateTime;

import com.company.project.module.newscategories.entity.NewsCategory;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class NewsDto {
  String newsId;
  String newsTitle;
  String newsDescription;
  LocalDateTime newsCreateAt;
  String newsImageUrl;
  NewsCategory newsCategory;
}
