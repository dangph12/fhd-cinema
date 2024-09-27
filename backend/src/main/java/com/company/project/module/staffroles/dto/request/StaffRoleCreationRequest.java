package com.company.project.module.staffroles.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class StaffRoleCreationRequest {

    @NotEmpty(message = "EMPTY_STAFF_ROLE_NAME")
    String staffRoleName;

    @Min(value = 0, message = "NEGATIVE_VALUE")
    @NotNull(message = "EMPTY_STAFF_ROLE_TYPE")
    int staffRoleType;

}
