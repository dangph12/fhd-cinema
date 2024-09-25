package com.company.project.module.showtimes.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShowtimeException extends RuntimeException {

    private ErrorCode errorCode;

    public ShowtimeException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
