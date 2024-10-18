package com.company.project.module.customers.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CustomerDto {

    String customerId;
    String customerName;
    String customerEmail;
    String customerPhone;
    String accountId;

}
