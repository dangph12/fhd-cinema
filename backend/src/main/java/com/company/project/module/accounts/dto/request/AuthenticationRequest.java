<<<<<<<< HEAD:backend/src/main/java/com/company/project/module/accounts/dto/request/AuthenticationRequest.java
package com.company.project.module.accounts.dto.request;
========
package com.company.project.module.accounts.dto.response;
>>>>>>>> dang/feat/manage-movies-ui:backend/src/main/java/com/company/project/module/accounts/dto/response/AccountDto.java

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
