package com.company.project.module.locations.exception;

import lombok.*;

@Getter
@Setter
public class LocationException extends RuntimeException {

    private final String status;
    private final String message;

    public LocationException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }

}
