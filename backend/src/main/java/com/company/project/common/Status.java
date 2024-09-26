package com.company.project.common;

import lombok.Getter;

@Getter
public enum Status {
    SUCCESS("success"),
    FAIL("fail"),
    ERROR("error");
    private final String value;
    Status(String value) {
        this.value = value;
    }
}
<<<<<<< HEAD
=======

>>>>>>> origin/feature/receive-tickets-via-email
