package com.company.project.movies.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String movie_id;
    private String rating_id;
    private String movie_title;
    private String movie_genre;
    private String movie_director;
    private String movie_cast;
    private String movie_status;
    private String movie_format;
    private int movie_duration_minute;
    private Date movie_release_date;
    private String movie_trailer_url;
    private String movie_description;
    private String movie_language;
    private String movie_poster_url;
}
