package com.company.project.email.controller;


import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.email.common.EmailStatusMessage;
import com.company.project.email.dto.request.EmailBillRequest;
import com.company.project.email.dto.request.EmailCreationRequest;
import com.company.project.email.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/email")
public class EmailController{

  @Autowired
  private EmailService emailService;

  @GetMapping("/confirmation")
  ResponseEntity<ApiResponse<Void>> sendPurchaseConfirmationEmail(@Valid @RequestBody EmailCreationRequest request) {
    emailService.sendEmailConfirmation(request);

    return ResponseEntity.ok().body(ApiResponse.<Void>builder()
      .status(Status.SUCCESS.getValue())
      .message(EmailStatusMessage.EMAIL_SENT_SUCCESSFULLY.getMessage())
      .build());
  }

  @GetMapping("/bill")
  ResponseEntity<ApiResponse<Void>> sendBillInformationEmail(@Valid @RequestBody EmailBillRequest request) {
    emailService.sendEmailBill(request);

    return ResponseEntity.ok().body(ApiResponse.<Void>builder()
      .status(Status.SUCCESS.getValue())
      .message(EmailStatusMessage.EMAIL_SENT_SUCCESSFULLY.getMessage())
      .build());
  }

}
