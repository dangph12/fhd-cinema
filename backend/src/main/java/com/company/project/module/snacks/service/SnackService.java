package com.company.project.module.snacks.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.bookings.entity.Booking;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.snacks.common.SnackStatusMessage;
import com.company.project.module.snacks.dto.request.SnackCreationRequest;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.snacks.exception.SnackException;
import com.company.project.module.snacks.repository.SnackRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SnackService {
  
  @Autowired
  private SnackRepository snackRepository;

  @Autowired
  private BookingRepository bookingRepository;

  public List<Snack> getAllSnack() {
    return snackRepository.findAll();
  }
  
  public Snack getSnackById(String snackId) {
    return snackRepository.findById(snackId)
    .orElseThrow(() -> new SnackException(
      Status.FAIL.getValue(), 
      SnackStatusMessage.NOT_EXIST.getMessage()));
  }

  public Snack createSnack(SnackCreationRequest request) {

    if(snackRepository.existsBySnackName(request.getSnackName())) {
        throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.EXIST_SNACK.getMessage());
    }

    Snack snack = Snack.builder()
      .snackName(request.getSnackName())
      .snackPrice(request.getSnackPrice())
      .build();

    return snackRepository.save(snack);
  }

  public Snack updateSnack(String snackId, SnackCreationRequest request) {
    if (!snackRepository.existsById(snackId)) {
      throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.NOT_EXIST.getMessage());
    }

    Snack existedSnack = this.getSnackById(snackId);

    if (!existedSnack.getSnackName().equals(request.getSnackName()) 
        && snackRepository.existsBySnackName(request.getSnackName())) {
        throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.EXIST_SNACK.getMessage());
    }

    existedSnack.setSnackName(request.getSnackName());

    if (!existedSnack.getSnackName().equals(request.getSnackName())) {
      existedSnack.setSnackName(request.getSnackName());
    }

    return snackRepository.save(existedSnack);
  }

  public void deleteSnackById(String snackId) {
    if (!snackRepository.existsById(snackId)) {
      throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.NOT_EXIST.getMessage());
    }

    Snack snack = this.getSnackById(snackId);

    List<Booking> bookingsWithSnack = bookingRepository.findBySnacksContaining(snack);
    for (Booking booking : bookingsWithSnack) {
        booking.getSnacks().remove(snack);
        bookingRepository.save(booking);
    }

    snackRepository.deleteById(snackId);
  }

}
