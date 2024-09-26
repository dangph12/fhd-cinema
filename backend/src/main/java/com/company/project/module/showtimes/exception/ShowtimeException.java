package com.company.project.module.showtimes.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowtimeException extends RuntimeException {

    private final String status;
    private final String message;

    public ShowtimeException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }

}
