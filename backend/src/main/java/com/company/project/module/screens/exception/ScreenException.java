package com.company.project.module.screens.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScreenException extends RuntimeException {
    private final String status;
    private final String message;

    public ScreenException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
