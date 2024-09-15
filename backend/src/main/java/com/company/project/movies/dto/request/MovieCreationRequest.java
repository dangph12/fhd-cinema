package com.company.project.movies.dto.request;

import java.util.Date;

public class MovieCreationRequest {
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

    public String getRating_id() {
        return rating_id;
    }

    public void setRating_id(String rating_id) {
        this.rating_id = rating_id;
    }

    public String getMovie_title() {
        return movie_title;
    }

    public void setMovie_title(String movie_title) {
        this.movie_title = movie_title;
    }

    public String getMovie_genre() {
        return movie_genre;
    }

    public void setMovie_genre(String movie_genre) {
        this.movie_genre = movie_genre;
    }

    public String getMovie_director() {
        return movie_director;
    }

    public void setMovie_director(String movie_director) {
        this.movie_director = movie_director;
    }

    public String getMovie_cast() {
        return movie_cast;
    }

    public void setMovie_cast(String movie_cast) {
        this.movie_cast = movie_cast;
    }

    public String getMovie_status() {
        return movie_status;
    }

    public void setMovie_status(String movie_status) {
        this.movie_status = movie_status;
    }

    public String getMovie_format() {
        return movie_format;
    }

    public void setMovie_format(String movie_format) {
        this.movie_format = movie_format;
    }

    public int getMovie_duration_minute() {
        return movie_duration_minute;
    }

    public void setMovie_duration_minute(int movie_duration_minute) {
        this.movie_duration_minute = movie_duration_minute;
    }

    public Date getMovie_release_date() {
        return movie_release_date;
    }

    public void setMovie_release_date(Date movie_release_date) {
        this.movie_release_date = movie_release_date;
    }

    public String getMovie_trailer_url() {
        return movie_trailer_url;
    }

    public void setMovie_trailer_url(String movie_trailer_url) {
        this.movie_trailer_url = movie_trailer_url;
    }

    public String getMovie_description() {
        return movie_description;
    }

    public void setMovie_description(String movie_description) {
        this.movie_description = movie_description;
    }

    public String getMovie_language() {
        return movie_language;
    }

    public void setMovie_language(String movie_language) {
        this.movie_language = movie_language;
    }

    public String getMovie_poster_url() {
        return movie_poster_url;
    }

    public void setMovie_poster_url(String movie_poster_url) {
        this.movie_poster_url = movie_poster_url;
    }
}
