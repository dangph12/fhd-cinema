package com.company.project.module.showtimes.common;

import lombok.Getter;

@Getter
public enum ShowtimeStatusMessage {

    CREATE_SUCCESS("The showtime was created successfully"),
    DELETE_SUCCESS("The showtime was deleted successfully"),
    UPDATE_SUCCESS("The showtime was updated successfully"),
    GET_SUCCESS("Get all showtimes successfully"),
    NOT_EXIST("The showtime is not exist"),
    UNKNOWN_ATTRIBUTE("The attribute does not exist"),
    LESS_THAN_ZERO("The index must not be less than 0"),
    SHOWTIME_EXIST("The showtime is already exist"),
    STRING_VALUE("The showtime price must be a valid number"),
    NEGATIVE_VALUE("The variable must be greater than 0"),
    EMPTY_SHOWTIME("The showtime attribute must not be empty"),
    EMPTY_MOVIE("The movie attribute must not be empty"),
    EMPTY_SCREEN("The screen attribute must not be empty");

    private final String message;

    ShowtimeStatusMessage(String message) {
        this.message = message;
    }

}
