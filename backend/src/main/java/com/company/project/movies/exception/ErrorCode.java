package com.company.project.movies.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {

    NOT_NULL(400, "Movie cannot be null"),
    MOVIE_NOT_FOUND(404, "Movie not found"),
    MOVIE_EXISTED(403, "Movie already existed"),
    DELETE_SUCCESS(204, "Movie successfully deleted");

    private final int code;
    private final String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}