package com.company.project.movies.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieException extends RuntimeException {
    public MovieException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    private ErrorCode errorCode;

}
