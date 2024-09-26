package com.company.project.module.emails.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import com.company.project.module.emails.dto.request.EmailBillRequest;
import com.company.project.module.emails.dto.request.EmailCreationRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
public class EmailService {

  @Autowired
  private JavaMailSender javaMailSender;

  @Autowired
  private TemplateEngine templateEngine;

  @Value("$(FHD Cinema)")
  private String fromEmailId;

  public void sendEmail(EmailCreationRequest request) {
    SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
    simpleMailMessage.setFrom(fromEmailId);
    simpleMailMessage.setTo(request.getEmail());
    simpleMailMessage.setText(request.getBody());
    simpleMailMessage.setSubject(request.getSubject());
    
    javaMailSender.send(simpleMailMessage);
  }

  public void sendEmailConfirmation(EmailCreationRequest request) {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

    try {
      helper.setTo(request.getEmail());
      helper.setSubject(request.getSubject());

      Context context = new Context();
      context.setVariable("customerName", request.getCustomerName());
      context.setVariable("body", request.getBody());

      String htmlContent = templateEngine.process(request.getTemplate(), context);
      helper.setText(htmlContent, true);
      javaMailSender.send(mimeMessage);
    } catch (MessagingException e) {
      // TODO: handle exception
    }
  }

  public void sendEmailBill(EmailBillRequest request) {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

    try {
      helper.setTo(request.getEmail());
      helper.setSubject(request.getSubject());

      Context context = new Context();
      context.setVariable("customerName", request.getCustomerName());
      context.setVariable("email", request.getEmail());
      context.setVariable("bookingCode", request.getBookingCode());
      context.setVariable("movieTitle", request.getMovieTitle());
      context.setVariable("cinemaName", request.getCinemaName());
      context.setVariable("showTime", request.getShowTime().toString());
      context.setVariable("screenName", request.getScreenName());

      String htmlContent = templateEngine.process(request.getTemplate(), context);
      helper.setText(htmlContent, true);
      javaMailSender.send(mimeMessage);
    } catch (MessagingException e) {
      // TODO: handle exception
    }
  }

}
