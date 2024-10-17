package com.company.project.module.accounts.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class AccountDto {
    String accountId;
    String accountName;
    String accountPassword;
    String accountType;

    public void setAccountPassword(String accountPassword) {
        this.accountPassword = encodePassWordByBCryptPassword(accountPassword);
    }

    public String encodePassWordByBCryptPassword(String password) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        return passwordEncoder.encode(password);
    }

}
