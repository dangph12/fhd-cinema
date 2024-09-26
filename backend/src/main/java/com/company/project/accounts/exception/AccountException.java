package com.company.project.accounts.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountException extends RuntimeException {
    private final int code;
    private final String message;

    public AccountException(int code, String message) {
        super(message);
        this.code = code;
        this.message = message;
    }
}
