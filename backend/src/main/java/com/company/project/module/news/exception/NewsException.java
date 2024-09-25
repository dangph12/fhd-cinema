package com.company.project.module.news.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewsException extends RuntimeException {

    private final String status;
    private final String message;

    public NewsException(String status, String message) {
        super(message);
        this.status = status;
        this.message = message;
    }

}
