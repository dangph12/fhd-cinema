package com.company.project.module.movies.dto.response;

import java.util.List;

import com.company.project.module.movies.entity.Movie;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MoviePagination {

  List<Movie> movies;
  long count;

}
