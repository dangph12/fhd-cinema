package com.company.project.vnpay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.vnpay.dto.request.TransactionRequest;
import com.company.project.vnpay.dto.response.TransactionResponse;
import com.company.project.vnpay.service.VNPayService;

import jakarta.servlet.http.HttpServletRequest;

@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    private VNPayService vnPayService;

    @PostMapping("/vnpay/create-order")
    public @ResponseBody ResponseEntity<ApiResponse<?>> createVnPayPayment(@RequestBody TransactionRequest transactionRequest,
                            HttpServletRequest request){
        String vnpayUrl = vnPayService.createOrder(request, transactionRequest.getOrderTotal(), transactionRequest.getOrderInfo(), transactionRequest.getUrlReturn());
        return ResponseEntity.ok().body(ApiResponse.builder()
                .status(Status.SUCCESS.getValue())
                .message("Success")
                .data(vnpayUrl)
                .build());
    }


    @GetMapping("/vnpay-payment")
    public @ResponseBody ResponseEntity<ApiResponse<TransactionResponse>> getOrderReturn(HttpServletRequest request){
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
                .status(Status.FAIL.getValue())
                .message("Fail")
                .data(transactionResponse)
                .build());
    }
}
