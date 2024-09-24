package com.company.project.module.accounts.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountException extends RuntimeException {
    private final String status;
    private final String message;

    public AccountException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
