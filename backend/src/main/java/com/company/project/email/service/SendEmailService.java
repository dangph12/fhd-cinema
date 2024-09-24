package com.company.project.email.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendEmailService {

  @Autowired
  private JavaMailSender javaMailSender;

  @Value("$(spring.mail.username)")
  private String fromEmailId;

  public void sendEmail(String recipient, String body, String subject) {
    SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
    simpleMailMessage.setFrom(fromEmailId);
    simpleMailMessage.setTo(recipient);
    simpleMailMessage.setText(body);
    simpleMailMessage.setSubject(subject);
    
    javaMailSender.send(simpleMailMessage);
  }

}
