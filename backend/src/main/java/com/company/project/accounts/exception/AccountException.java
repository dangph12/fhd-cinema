package com.company.project.accounts.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountException extends RuntimeException {
    private AccountErrorCode accountErrorCode;

    public AccountException(AccountErrorCode accountErrorCode) {
        super(accountErrorCode.getMessage());
        this.accountErrorCode = accountErrorCode;
    }
}
