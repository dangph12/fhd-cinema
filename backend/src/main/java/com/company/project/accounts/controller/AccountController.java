package com.company.project.accounts.controller;

import com.company.project.accounts.common.AccountStatusMessage;
import com.company.project.accounts.dto.AccountCreationRequest;
import com.company.project.accounts.entity.Account;
import com.company.project.accounts.service.AccountService;
import com.company.project.global.ApiResponse;
import com.company.project.common.Status;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Account>>> getAllAccount() {
        return ResponseEntity.ok().body(ApiResponse.<List<Account>>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(AccountStatusMessage.GET_SUCCESS.getMessage())
                    .data(accountService.getAllAccounts())
                    .build());
    }


    @PostMapping
    ResponseEntity<ApiResponse<Account>> addAccount(@RequestBody @Valid AccountCreationRequest request) {
        Account account = accountService.createAccount(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Account>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(account)
                        .build());
    }

    @PutMapping("/{accountId}")
    ResponseEntity<ApiResponse<Account>> updateAccount(
            @PathVariable(name = "accountId") String accountId,
            @RequestBody @Valid AccountCreationRequest request) {
        Account account = accountService.updateAccount(accountId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Account>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(account)
                        .build());
    }

    @DeleteMapping("/{accountId}")
    ResponseEntity<ApiResponse<Void>> deleteAccount(
            @PathVariable(name = "accountId") String accountId) {
        accountService.deleteAccountById(accountId);
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Void>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
