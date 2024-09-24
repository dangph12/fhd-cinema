package com.company.project.module.emails.controller;


import com.company.project.module.emails.service.SendEmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/email")
public class EmailController{

  @Autowired
  private SendEmailService sendEmailService;

  @GetMapping
  public String sendEmail() {
    sendEmailService.sendEmail("fhdcinemavietnam@gmail.com", "Test body", "Test subject");
    return "Sent successfully";
  }
}
