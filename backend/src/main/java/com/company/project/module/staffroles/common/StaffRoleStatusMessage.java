package com.company.project.module.staffroles.common;

import lombok.Getter;

@Getter
public enum StaffRoleStatusMessage {

    DELETE_SUCCESS("The staff role was deleted successfully"),
    UPDATE_SUCCESS("The staff role was updated successfully"),
    NOT_EXIST("The staff role is not exist"),
    STAFF_ROLE_EXIST("The staff role is already exist"),
    STRING_VALUE("The staff role type must be a valid number"),
    NEGATIVE_VALUE("The variable must be greater than 0"),
    CREATE_SUCCESS("The staff role was created successfully"),
    GET_SUCCESS("Get all staff roles successfully"),
    EMPTY_STAFF_ROLE_NAME("The staff role name must not be empty"),
    EMPTY_STAFF_ROLE_TYPE("The staff role type must not be empty"),;

    private final String message;

    StaffRoleStatusMessage(String message) {
        this.message = message;
    }

}
