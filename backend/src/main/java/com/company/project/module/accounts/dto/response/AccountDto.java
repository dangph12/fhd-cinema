<<<<<<<< HEAD:backend/src/main/java/com/company/project/module/accounts/dto/response/AccountDto.java
package com.company.project.module.accounts.dto.response;
========
package com.company.project.module.accounts.dto.request;
>>>>>>>> f374cb731cb3f5226656ce2a8295594aa9803391:backend/src/main/java/com/company/project/module/accounts/dto/request/AuthenticationRequest.java

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationRequest {
    String accountName;
    String accountPassword;
}
