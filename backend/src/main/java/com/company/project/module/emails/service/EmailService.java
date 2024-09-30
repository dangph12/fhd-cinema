package com.company.project.module.emails.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import com.company.project.module.bills.entity.Bill;
import com.company.project.module.bills.service.BillService;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.service.CustomerService;
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

  @Autowired
  private BillService billService;

  @Autowired
  private CustomerService customerService;

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

    Bill bill = billService.getBillById(request.getBillId());
    Customer customer = customerService.getCustomerById(request.getCustomerId());
    
    String customerName = customer.getCustomerName();
    String email = customer.getCustomerEmail();
    String movieTitle = bill.getBooking().getShowtime().getMovie().getMovieTitle();
    String cinemaName = bill.getBooking().getShowtime().getScreen().getCinema().getCinemaName();
    String screenName = bill.getBooking().getShowtime().getScreen().getScreenName();
    String location = bill.getBooking().getShowtime().getScreen().getCinema().getLocation().getLocationName();
    String bookingCode = bill.getBooking().getBookingId();

    LocalDateTime showTimeAt = bill.getBooking().getShowtime().getShowtimeAt();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss dd/MM/yyyy");
    String formattedShowTime = showTimeAt.format(formatter);

    

    try {
      helper.setTo(email);
      helper.setSubject(request.getSubject());

      Context context = new Context();
      context.setVariable("customerName", customerName);
      context.setVariable("email", email);
      context.setVariable("movieTitle", movieTitle);
      context.setVariable("cinemaName", cinemaName);
      context.setVariable("screeenName", screenName);
      context.setVariable("location", location);
      context.setVariable("showTime", formattedShowTime);
      context.setVariable("bookingCode", bookingCode);

      String htmlContent = templateEngine.process(request.getTemplate(), context);
      helper.setText(htmlContent, true);
      javaMailSender.send(mimeMessage);
    } catch (MessagingException e) {
      // TODO: handle exception
    }
  }

}
