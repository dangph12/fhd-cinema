package com.company.project.accounts.exception;

import lombok.Getter;

@Getter
public enum AccountErrorCode {

    DELETE_SUCCESS(201, "The account has been deleted successfully"),
    NOT_NULL(401, "The account cannot be null"),
    NOT_EMPTY(402, "The account cannot be empty");

    private final int code;
    private final String message;

    AccountErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
