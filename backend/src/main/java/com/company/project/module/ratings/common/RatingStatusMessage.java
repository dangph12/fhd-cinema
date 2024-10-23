package com.company.project.module.ratings.common;

import lombok.Getter;

@Getter
public enum RatingStatusMessage {

    DELETE_SUCCESS("The rating was deleted successfully"),
    UPDATE_SUCCESS("The rating was updated successfully"),
    UNKNOWN_ATTRIBUTE("The attribute does not exist"),
    EXIST_NAME("The rating's name have been existed"),
    NOT_EXIST("The rating is not exist"),
    LESS_THAN_ZERO("The index must not be less than 0"),
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
