package com.company.project.vnpay.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.dto.response.AccountDto;
import com.company.project.vnpay.dto.request.TransactionRequest;
import com.company.project.vnpay.dto.response.TransactionResponse;
import com.company.project.vnpay.service.VNPayService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    private VNPayService vnPayService;

    @PostMapping("/submitOrder")
    public String submidOrder(@RequestBody TransactionRequest transactionRequest,
                            HttpServletRequest request){
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String vnpayUrl = vnPayService.createOrder(transactionRequest.getOrderTotal(), transactionRequest.getOrderInfo(), baseUrl);
        return "redirect:" + vnpayUrl;
    }

    @GetMapping("/vnpay-payment")
    public @ResponseBody ResponseEntity<ApiResponse<TransactionResponse>> GetMapping(HttpServletRequest request){
        int paymentStatus =vnPayService.orderReturn(request);

        String orderInfo = request.getParameter("vnp_OrderInfo");
        String paymentTime = request.getParameter("vnp_PayDate");
        String transactionId = request.getParameter("vnp_TransactionNo");
        String totalPrice = request.getParameter("vnp_Amount");

        TransactionResponse transactionResponse = TransactionResponse.builder()
                .transactionId(transactionId)
                .orderInfo(orderInfo)
                .paymentTime(paymentTime)
                .totalPrice(totalPrice)
                .build();

        if(paymentStatus == 1){
            return ResponseEntity.ok().body(ApiResponse.<TransactionResponse>builder()
                    .status(Status.SUCCESS.getValue())
                    .message("Success")
                    .data(transactionResponse)
                    .build());
        }
        return ResponseEntity.ok().body(ApiResponse.<TransactionResponse>builder()
                .status(Status.SUCCESS.getValue())
                .message("Success")
                .data(transactionResponse)
                .build());
    }
}
