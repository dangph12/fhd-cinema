package com.company.project.module.accounts.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountCreationRequest {
    @NotNull(message = "EMPTY_NAME")
    String accountName;
    @NotNull(message = "EMPTY_PASSWORD")
    String accountPassword;
    @Min(value = 0, message = "NEGATIVE_VALUE")
    int accountType;
}
