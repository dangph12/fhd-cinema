package com.company.project.module.ratings.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingException extends RuntimeException {
    private final String status;
    private final String message;

    public RatingException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
