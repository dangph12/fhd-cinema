package com.company.project.module.customers.dto.response;

import com.company.project.module.accounts.entity.Account;
import com.company.project.module.bookings.entity.Booking;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

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
    Account account;
    List<Booking> bookings;

}
