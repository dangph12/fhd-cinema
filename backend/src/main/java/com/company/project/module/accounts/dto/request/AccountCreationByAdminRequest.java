package com.company.project.module.accounts.dto.request;

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
public class AccountCreationByAdminRequest {
    @NotEmpty(message = "EMPTY_NAME")
    String accountName;
    @NotEmpty(message = "EMPTY_TYPE")
    String accountType;

    String customerName;

    @NotEmpty(message = "EMPTY_EMAIL")
    String customerEmail;

    String customerPhone;
}
