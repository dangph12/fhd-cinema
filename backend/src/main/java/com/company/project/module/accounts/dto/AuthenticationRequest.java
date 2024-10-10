package com.company.project.module.accounts.dto;

import jakarta.validation.constraints.NotEmpty;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationRequest {

    @NotEmpty(message = "EMPTY_NAME")
    String accountName;

    @NotEmpty(message = "EMPTY_PASSWORD")
    String accountPassword;

}
