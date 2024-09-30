package com.company.project.module.accounts.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class AccountDto {
    String accountId;
    String accountName;
    String accountType;
}
