package com.company.project.accounts.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountCreationRequest {
    @NotNull(message = "Account name cannot be null")
    String accountName;
    @NotNull(message = "Account password cannot be null")
    String accountPassword;
    @NotNull(message = "Account type cannot be null")
    int accountType;
}
