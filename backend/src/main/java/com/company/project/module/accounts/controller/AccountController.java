package com.company.project.module.accounts.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.AccountCreationRequest;
import com.company.project.module.accounts.dto.AccountDto;
import com.company.project.module.accounts.dto.AccountUpdateRequest;
import com.company.project.module.accounts.service.AccountService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<AccountDto>>> getAllAccount() {
        return ResponseEntity.ok().body(ApiResponse.<List<AccountDto>>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(AccountStatusMessage.GET_SUCCESS.getMessage())
                    .data(accountService.getAllAccounts())
                    .build());
    }

    @GetMapping("/{accountId}")
    ResponseEntity<ApiResponse<AccountDto>> getAccountById(
    @PathVariable(name = "accountId") String accountId) {
        return ResponseEntity.ok().body(ApiResponse.<AccountDto>builder()
                    .status(Status.SUCCESS.getValue())
                    .message(AccountStatusMessage.GET_SUCCESS.getMessage())
                    .data(accountService.getAccountById(accountId))
                    .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<AccountDto>> addAccount(@RequestBody @Valid AccountCreationRequest request) {
        AccountDto accountDto = accountService.createAccount(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<AccountDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(accountDto)
                        .build());
    }

    @PutMapping("/{accountId}")
    ResponseEntity<ApiResponse<AccountDto>> updateAccount(
            @PathVariable(name = "accountId") String accountId,
            @RequestBody @Valid AccountUpdateRequest request) {
        AccountDto accountDto = accountService.updateAccount(accountId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<AccountDto>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(AccountStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(accountDto)
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
