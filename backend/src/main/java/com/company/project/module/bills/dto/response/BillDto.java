package com.company.project.module.bills.dto.response;

import java.time.LocalDateTime;
import java.util.List;

import com.company.project.module.bookings.dto.response.BookingDto;
import com.company.project.module.vouchers.dto.response.VoucherDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BillDto {
    String billId;
    int billAmount;
    boolean isPaid;
    LocalDateTime billCreatedAt;
    BookingDto bookingDto;
    List<VoucherDto> voucherDtos;
}
