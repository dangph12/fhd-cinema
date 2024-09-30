package com.company.project.module.bills.service;


import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.bills.common.BillStatusMessage;
import com.company.project.module.bills.dto.request.BillCreationRequest;
import com.company.project.module.bills.entity.Bill;
import com.company.project.module.bills.exception.BillException;
import com.company.project.module.bills.repository.BillRepository;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.bookings.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillService {
  
  @Autowired
  private BillRepository billRepository;

  @Autowired
  private BookingService bookingService;

  @Autowired
  private BookingRepository bookingRepository;

  public List<Bill> getAllBill() {
    return billRepository.findAll();
  }
  
  public Bill getBillById(String billId) {
    return billRepository.findById(billId)
    .orElseThrow(() -> new BillException(
      Status.FAIL.getValue(), 
      BillStatusMessage.NOT_EXIST.getMessage()));
  }

  public Bill createBill(BillCreationRequest request) {
    /**
    if (billRepository.existsByBooking_BookingId(request.getBookingId())) {
      throw new BillException(Status.FAIL.getValue(), BillStatusMessage.BOOKING_HAS_BILL.getMessage());
    }
    **/

    Booking booking = bookingService.getBookingById(request.getBookingId());

    Bill bill = Bill.builder()
      .booking(booking)
      .billAmount(request.getBillAmount())
      .isPaid(request.isPaid())
      .build();

    return billRepository.save(bill);
  }

  /**
  public Bill updateBill(String billId, BillCreationRequest request) {
    if (!billRepository.existsById(billId)) {
      throw new BillException(Status.FAIL.getValue(), BillStatusMessage.NOT_EXIST.getMessage());
    }

    Bill existedBill = this.getBillById(billId);

    if (!existedBill.getBillName().equals(request.getBillName()) 
        && billRepository.existsByBillName(request.getBillName())) {
        throw new BillException(Status.FAIL.getValue(), BillStatusMessage.EXIST_bill.getMessage());
    }

    existedBill.setBillName(request.getBillName());

    if (!existedBill.getBillName().equals(request.getBillName())) {
      existedBill.setBillName(request.getBillName());
    }

    return billRepository.save(existedBill);
  }
  **/

  public void deleteBillById(String billId) {
    if (!billRepository.existsById(billId)) {
      throw new BillException(Status.FAIL.getValue(), BillStatusMessage.NOT_EXIST.getMessage());
    }

    Bill bill = this.getBillById(billId);

    Booking booking = bookingService.getBookingById(bill.getBooking().getBookingId());

    if (booking != null) {
      bill.setBooking(null);
    }

    billRepository.deleteById(billId);
  }

}

