package com.company.project.module.ratings.common;

import lombok.Getter;

@Getter
public enum RatingStatusMessage {

    DELETE_SUCCESS("The rating was deleted successfully"),
    UPDATE_SUCCESS("The rating was updated successfully"),
    NOT_EXIST("The rating is not exist"),
    RATING_EXIST("The rating is already exist"),
    CREATE_SUCCESS("The rating was created successfully"),
    GET_SUCCESS("Get all ratings successfully"),
    EMPTY_NAME("The rating name must not be empty"),
    EMPTY_DESCRIPTION("The rating description must not be empty");

    private final String message;

    RatingStatusMessage(String message) {
        this.message = message;
    }

}
