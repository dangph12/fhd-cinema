package com.company.project.module.emails.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import com.company.project.common.Status;
import com.company.project.module.bills.entity.Bill;
import com.company.project.module.bills.service.BillService;
import com.company.project.module.customers.common.CustomerStatusMessage;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.exception.CustomerException;
import com.company.project.module.customers.repository.CustomerRepository;
import com.company.project.module.customers.service.CustomerService;
import com.company.project.module.emails.common.EmailStatusMessage;
import com.company.project.module.emails.dto.request.EmailBillRequest;
import com.company.project.module.emails.dto.request.EmailResetPasswordRequest;
import com.company.project.module.emails.exception.EmailException;
import com.company.project.module.seats.entity.Seat;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.tickets.entity.Ticket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
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
  private ResourceLoader resourceLoader;

  @Autowired
  private BillService billService;

  @Autowired
  private CustomerService customerService;

  @Autowired
  private CustomerRepository customerRepository;

  @Value("$(FHD Cinema)")
  private String fromEmailId;

  public void sendEmailResetPassword(EmailResetPasswordRequest request) {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

    String templatePath = "classpath:/templates/email-reset-password.html";
    Resource resource = resourceLoader.getResource(templatePath);

    if (!resource.exists() || !resource.isReadable()) {
      throw new EmailException(
          Status.FAIL.getValue(),
          EmailStatusMessage.TEMPLATE_INVALID.getMessage());
    }

    Customer customer = customerRepository.findByCustomerEmailAndIsDeletedFalse(request.getCustomerEmail());
    if (customer == null) {
      throw new CustomerException(Status.FAIL.getValue(), CustomerStatusMessage.NOT_EMAIL_EXIST.getMessage());
    }

    String accountId = customer.getAccount().getAccountId();
    String email = request.getCustomerEmail();
    String customerName = customer.getCustomerName();

    try {
      helper.setTo(email);
      helper.setSubject("Đặt lại mật khẩu tài khoản của bạn");

      Context context = new Context();
      context.setVariable("accountId", accountId);
      context.setVariable("customerName", customerName);

      String htmlContent = templateEngine.process("email-reset-password", context);
      helper.setText(htmlContent, true);
      javaMailSender.send(mimeMessage);
    } catch (MessagingException e) {
      // TODO: handle exception
    }
  }

  public void sendEmailProvideLoginInformation(String email, String username, String password) {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

    String subject = "Tài khoản và mật khẩu để đăng nhập vào FHD Cinema";
    String template = "email-login-infor";

    try {
      helper.setTo(email);
      helper.setSubject(subject);

      Context context = new Context();
      context.setVariable("username", username);
      context.setVariable("password", password);

      String htmlContent = templateEngine.process(template, context);
      helper.setText(htmlContent, true);
      javaMailSender.send(mimeMessage);
    } catch (MessagingException e) {
      // TODO: handle exception
    }
  }

  public void sendEmailBill(EmailBillRequest request) {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

    String template = "email-bill";

    String templatePath = "classpath:/templates/" + template + ".html";
    Resource resource = resourceLoader.getResource(templatePath);

    if (!resource.exists() || !resource.isReadable()) {
      throw new EmailException(
          Status.FAIL.getValue(),
          EmailStatusMessage.TEMPLATE_INVALID.getMessage());
    }

    Bill bill = billService.getBillById(request.getBillId());
    Customer customer = customerService.getCustomerById(request.getCustomerId());

    String customerName = customer.getCustomerName();
    String phone = customer.getCustomerPhone();
    String email = customer.getCustomerEmail();
    String movieTitle = bill.getBooking().getShowtime().getMovie().getMovieTitle();
    String cinemaName = bill.getBooking().getShowtime().getScreen().getCinema().getCinemaName();
    String screenName = bill.getBooking().getShowtime().getScreen().getScreenName();
    String location = bill.getBooking().getShowtime().getScreen().getCinema().getLocation().getLocationName();
    String bookingCode = bill.getBooking().getBookingId();
    int totalPrice = bill.getBillAmount();

    String subject = "Xác nhận đặt vé " + movieTitle + " tại " + cinemaName + " thành công!";

    List<Ticket> tickets = bill.getBooking().getTickets();
    List<Snack> snacks = bill.getBooking().getSnacks();

    StringBuffer seatList = new StringBuffer();

    tickets.forEach(ticket -> {
      Seat seat = ticket.getSeat();
      if (seat != null) {
        seatList.append(seat.getSeatName()).append(" ");
      }
    });


    LocalDateTime showTimeAt = bill.getBooking().getShowtime().getShowtimeAt();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss dd/MM/yyyy");
    String formattedShowTime = showTimeAt.format(formatter);

    Map<String, Long> snackMap = snacks.stream()
        .collect(Collectors.groupingBy(Snack::getSnackName, Collectors.counting()));

    StringBuffer snackList = new StringBuffer();
    snackMap.forEach((name, count) -> {
      snackList.append(count).append(" x ").append(name).append("\n");
    });

    try {
      helper.setTo(email);
      helper.setSubject(subject);

      Context context = new Context();
      context.setVariable("customerName", customerName);
      context.setVariable("email", email);
      context.setVariable("phone", phone);
      context.setVariable("movieTitle", movieTitle);
      context.setVariable("cinemaName", cinemaName);
      context.setVariable("screenName", screenName);
      context.setVariable("seatList", seatList.toString());
      context.setVariable("location", location);
      context.setVariable("totalPrice", totalPrice);
      context.setVariable("showTime", formattedShowTime);
      context.setVariable("bookingCode", bookingCode);
      context.setVariable("snackList", snackList.toString());

      String htmlContent = templateEngine.process(template, context);
      helper.setText(htmlContent, true);
      javaMailSender.send(mimeMessage);
    } catch (MessagingException e) {
      // TODO: handle exception
    }
  }

}
