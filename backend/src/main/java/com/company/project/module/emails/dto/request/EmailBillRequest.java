package com.company.project.module.emails.dto.request;

import java.time.LocalDateTime;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmailBillRequest {

  String email;
  String subject;
  String template;
  String bookingCode;
  String customerName;
  String movieTitle;
  String cinemaName;
  LocalDateTime showTime;
  String screenName;

}
