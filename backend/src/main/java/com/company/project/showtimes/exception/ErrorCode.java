package com.company.project.showtimes.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    NOT_NULL(401, "Showtime cannot be null"),
    SHOWTIME_NOT_FOUND(402, "Showtime not found"),
    SHOWTIME_EXISTED(403, "Showtime already existed"),
    DELETE_SHOWTIME_SUCCESSFULLY(201, "Delete showtime successfully");

    private final int code;
    private final String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
