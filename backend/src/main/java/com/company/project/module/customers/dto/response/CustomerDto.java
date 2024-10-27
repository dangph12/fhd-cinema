package com.company.project.module.customers.dto.response;

import java.util.List;

import com.company.project.module.accounts.entity.Account;
import com.company.project.module.bookings.entity.Booking;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class CustomerDto {
    String customerId;
    String customerName;
    String customerPhone;
    String customerEmail;
    @JsonIgnore
    Account account;
    List<Booking> bookings;
}
