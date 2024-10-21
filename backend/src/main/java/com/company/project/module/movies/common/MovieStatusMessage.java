package com.company.project.module.movies.common;

import lombok.Getter;

@Getter
public enum MovieStatusMessage {

    CREATE_SUCCESS("The movie was created successfully"),
    DELETE_SUCCESS("The movie was deleted successfully"),
    UPDATE_SUCCESS("The movie was updated successfully"),
    GET_SUCCESS("Get all movies successfully"),
    NOT_EXIST("The movie is not exist"),
    LESS_THAN_ZERO("The index must not be less than 0"),
    MOVIE_EXIST("The movie is already exist"),
    STRING_VALUE("The movie duration minute must be a valid number"),
    NEGATIVE_VALUE("The variable must be greater than 0"),
    EMPTY_MOVIE("The movie's attribute must not be empty");

    private final String message;

    MovieStatusMessage(String message) {
        this.message = message;
    }

}
