package com.company.project.module.news.common;

import lombok.Getter;

@Getter
public enum NewsStatusMessage {

    DELETE_SUCCESS("The news was deleted successfully"),
    UPDATE_SUCCESS("The news was updated successfully"),
    NOT_EXIST("The news is not exist"),
    LESS_THAN_ZERO("The index must not be less than 0"),
    STRING_VALUE("The news's price must be a valid number"),
    NEGATIVE_VALUE("The variable must be greater than 0"),
    EXIST_TITLE("The title of news have been existed"),
    CREATE_SUCCESS("The news was created successfully"),
    GET_SUCCESS("Get all news successfully"),
    EMPTY_NAME("The news title must not be empty"),
    EMPTY_PASSWORD("The news description must not be empty"),
    EMPTY_CREATE_DATE("The news date must not be empty"),
    EMPTY_IMAGE_URL("The news image url must not be empty"),
    EMPTY_CATEGORY("The news category must not be empty");

    private final String message;

    NewsStatusMessage(String message) {
        this.message = message;
    }

}
