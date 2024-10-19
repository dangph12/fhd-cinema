package com.company.project.module.accounts.dto.response;

import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.customers.entity.Customer;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SignInResponse {

    String token;
    Customer customer;
    List<Booking> booking;

}
