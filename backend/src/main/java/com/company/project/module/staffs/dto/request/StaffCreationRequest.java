package com.company.project.module.staffs.dto.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class StaffCreationRequest {

    @NotEmpty(message = "Account Id not be empty")
    String accountId;

    @NotEmpty(message = "Staff role Id not be empty")
    String staffRoleId;

    @NotEmpty(message = "EMPTY_NAME")
    String staffName;

}
