package com.company.project.module.screens.common;

import lombok.Getter;

@Getter
public enum ScreenStatusMessage {

    DELETE_SUCCESS("The screen was deleted successfully"),
    UPDATE_SUCCESS("The screen was updated successfully"),
    NOT_EXIST("The screen is not exist"),
    CREATE_SUCCESS("The screen was created successfully"),
    GET_SUCCESS("Get all screens successfully"),
    EMPTY_NAME("The screen name must not be empty"),
    EMPTY_CINEMA_ID("The cinema id must not be empty");

    private final String message;

    ScreenStatusMessage(String message) {
        this.message = message;
    }

}

