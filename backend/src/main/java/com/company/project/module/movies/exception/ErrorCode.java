package com.company.project.module.movies.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {

    NOT_NULL(401, "Movie cannot be null"),
    MOVIE_NOT_FOUND(402, "Movie not found"),
    MOVIE_EXISTED(403, "Movie already existed"),
    DELETE_SUCCESS(201, "Movie successfully deleted");

    private final int code;
    private final String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}