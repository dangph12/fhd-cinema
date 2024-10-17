<<<<<<<< HEAD:backend/src/main/java/com/company/project/module/accounts/dto/response/AccountDto.java
package com.company.project.module.accounts.dto.response;
========
package com.company.project.module.accounts.dto.request;
>>>>>>>> 86a6b88dc763fbc8ee659a8d2d0965a1d076e552:backend/src/main/java/com/company/project/module/accounts/dto/request/AuthenticationRequest.java

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
