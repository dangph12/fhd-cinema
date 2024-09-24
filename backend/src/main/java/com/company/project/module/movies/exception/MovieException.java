package com.company.project.module.movies.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieException extends RuntimeException {

    private ErrorCode errorCode;

    public MovieException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

}
