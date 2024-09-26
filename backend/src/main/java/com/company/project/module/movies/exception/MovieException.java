package com.company.project.module.movies.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieException extends RuntimeException {

    private final String status;
    private final String message;

    public MovieException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}