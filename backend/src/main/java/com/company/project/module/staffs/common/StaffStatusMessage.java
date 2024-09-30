package com.company.project.module.staffs.common;

import lombok.Getter;

@Getter
public enum StaffStatusMessage {

    DELETE_SUCCESS("The staff was deleted successfully"),
    UPDATE_SUCCESS("The staff was updated successfully"),
    NOT_EXIST("The staff is not exist"),
    STAFF_EXIST("The staff is already exist"),
    CREATE_SUCCESS("The staff was created successfully"),
    GET_SUCCESS("Get all staffs successfully"),
    EMPTY_NAME("The staff name must not be empty");

    private final String message;

    StaffStatusMessage(String message) {
        this.message = message;
    }

}
