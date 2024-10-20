package com.company.project.module.accounts.dto.request;

import jakarta.validation.constraints.Min;
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
public class AccountUpdateRequest {
    @NotEmpty(message = "EMPTY_NAME")
    String accountName;
    @NotEmpty(message = "EMPTY_PASSWORD")
    String accountPassword;
    @Min(value = 0, message = "NEGATIVE_VALUE")
    int accountType;
}
