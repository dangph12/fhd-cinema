package com.company.project.module.staffroles.exception;

import lombok.Getter;

@Getter
public class StaffRoleException extends RuntimeException {

    private final String status;
    private final String message;

    public StaffRoleException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }

}
