package com.company.project.vnpay.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionResponse {
    String transactionId;
    String orderInfo;
    String paymentTime;
    String totalPrice;
}
