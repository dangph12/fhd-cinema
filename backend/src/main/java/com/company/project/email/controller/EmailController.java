package com.company.project.email.controller;


import com.company.project.email.service.SendEmailService;

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
