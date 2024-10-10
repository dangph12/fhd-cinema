package com.company.project.module.vouchers.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.bills.service.BillService;
import com.company.project.module.customers.service.CustomerService;
import com.company.project.module.vouchers.common.VoucherStatusMessage;
import com.company.project.module.vouchers.dto.request.VoucherCreationRequest;
import com.company.project.module.vouchers.entity.Voucher;
import com.company.project.module.vouchers.exception.VoucherException;
import com.company.project.module.vouchers.repository.VoucherRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class VoucherService {

  @Autowired
  private VoucherRepository voucherRepository;

  @Autowired
  private BillService billService;

  @Autowired
  private CustomerService customerService;

  public List<Voucher> getAllVoucher() {
    return voucherRepository.findAll();
  }

  public Voucher getVoucherById(String voucherId) {
    return voucherRepository.findById(voucherId)
        .orElseThrow(() -> new VoucherException(
            Status.FAIL.getValue(),
            VoucherStatusMessage.NOT_EXIST.getMessage()));
  }

  public Voucher createVoucher(VoucherCreationRequest request) {
    if (voucherRepository.existsByVoucherCode(request.getVoucherCode())) {
      throw new VoucherException(Status.FAIL.getValue(), VoucherStatusMessage.EXIST_NAME.getMessage());
    }

    if (voucherRepository.existsByVoucherName(request.getVoucherName())) {
      throw new VoucherException(Status.FAIL.getValue(), VoucherStatusMessage.EXIST_NAME.getMessage());
    }

    Voucher voucher = Voucher.builder()
        .voucherCode(request.getVoucherCode())
        .voucherName(request.getVoucherName())
        .voucherDescription(request.getVoucherDescription())
        .voucherDiscountPercent(request.getVoucherDiscountPercent())
        .voucherStartedAt(request.getVoucherStartedAt())
        .voucherEndedAt(request.getVoucherEndedAt())
        .build();

    return voucherRepository.save(voucher);
  }

  public Voucher updateVoucher(String voucherId, VoucherCreationRequest request) {
    if (!voucherRepository.existsById(voucherId)) {
      throw new VoucherException(Status.FAIL.getValue(),
          VoucherStatusMessage.NOT_EXIST.getMessage());
    }

    Voucher existedVoucher = this.getVoucherById(voucherId);

    if (!existedVoucher.getVoucherName().equals(request.getVoucherName())
        && voucherRepository.existsByVoucherName(request.getVoucherName())) {
      throw new VoucherException(Status.FAIL.getValue(),
          VoucherStatusMessage.EXIST_NAME.getMessage());
    }

    if (!existedVoucher.getVoucherCode().equals(request.getVoucherCode())
        && voucherRepository.existsByVoucherCode(request.getVoucherCode())) {
      throw new VoucherException(Status.FAIL.getValue(),
          VoucherStatusMessage.EXIST_CODE.getMessage());
    }

    existedVoucher.setVoucherDescription(request.getVoucherDescription());
    existedVoucher.setVoucherDiscountPercent(request.getVoucherDiscountPercent());
    existedVoucher.setVoucherStartedAt(request.getVoucherStartedAt());
    existedVoucher.setVoucherEndedAt(request.getVoucherEndedAt());

    if (!existedVoucher.getVoucherName().equals(request.getVoucherName())) {
      existedVoucher.setVoucherName(request.getVoucherName());
    }

    if (!existedVoucher.getVoucherCode().equals(request.getVoucherCode())) {
      existedVoucher.setVoucherCode(request.getVoucherCode());
    }

    return voucherRepository.save(existedVoucher);
  }

  @Transactional
  public void deleteVoucherById(String voucherId) {
    if (!voucherRepository.existsById(voucherId)) {
      throw new VoucherException(Status.FAIL.getValue(),
          VoucherStatusMessage.NOT_EXIST.getMessage());
    }

    Voucher voucher = this.getVoucherById(voucherId);

    billService.removeVoucherInBill(voucher);

    customerService.removeVoucherFromAllCustomer(voucher);

    voucherRepository.delete(voucher);
  }

}
