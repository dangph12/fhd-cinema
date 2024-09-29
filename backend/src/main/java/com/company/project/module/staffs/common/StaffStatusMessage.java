package com.company.project.module.staffs.common;

import lombok.Getter;

@Getter
public enum StaffStatusMessage {

    DELETE_SUCCESS("The staff was deleted successfully"),
    UPDATE_SUCCESS("The staff was updated successfully"),
    NOT_EXIST("The staff is not exist"),
    STRING_VALUE("The account's price must be a valid number"),
    NEGATIVE_VALUE("The variable must be greater than 0"),
    CREATE_SUCCESS("The account was created successfully"),
    GET_SUCCESS("Get all accounts successfully"),
    EMPTY_NAME("The account name must not be empty"),
    EMPTY_PASSWORD("The account password must not be empty");

    private final String message;

    StaffStatusMessage(String message) {
        this.message = message;
    }

}
