package com.company.project.module.cinemas.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CinemaException extends RuntimeException {

    private final String status;
    private final String message;

    public CinemaException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }

}
