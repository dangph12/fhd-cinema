package com.company.project.module.cinemas.common;

import lombok.Getter;

@Getter
public enum CinemaStatusMessage {

    DELETE_SUCCESS("The cinema was deleted successfully"),
    UPDATE_SUCCESS("The cinema was updated successfully"),
    NOT_EXIST("The cinema is not exist"),
    UNKNOWN_ATTRIBUTE("The attribute does not exist"),
    LESS_THAN_ZERO("The index must not be less than 0"),
    CINEMA_EXIST("The cinema already exists"),
    CREATE_SUCCESS("The cinema was created successfully"),
    GET_SUCCESS("Get all cinemas successfully"),
    EMPTY_NAME("The cinema name must not be empty"),
    EMPTY_LOCATION_NAME("The cinema location name must not be empty"),
    EMPTY_LOCATION_ID("The cinema location id must not be empty");

    private final String message;

    CinemaStatusMessage(String message) {
        this.message = message;
    }

}
