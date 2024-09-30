package com.company.project.module.staffs.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StaffException extends RuntimeException {

    private final String status;
    private final String message;

    public StaffException(String status, String message) {
        this.status = status;
        this.message = message;
    }
}
