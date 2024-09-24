package com.company.project.accounts.controller;

import com.company.project.accounts.common.AccountStatusMessage;
import com.company.project.accounts.dto.AccountApiResponse;
import com.company.project.accounts.dto.AccountCreationRequest;
import com.company.project.accounts.entity.Account;
import com.company.project.accounts.service.AccountService;
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
    ResponseEntity<AccountApiResponse<List<Account>>> getAllAccount() {
        return ResponseEntity.status(HttpStatus.OK.value()).body(AccountApiResponse.<List<Account>>builder()
                .message(AccountStatusMessage.GET_SUCCESS.getMessage())
                .result(accountService.getAllAccounts())
                .build());
    }


    @PostMapping
    ResponseEntity<AccountApiResponse<Account>> addAccount(@RequestBody @Valid AccountCreationRequest request) {
        Account account = accountService.createAccount(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(AccountApiResponse.<Account>builder()
                        .code(HttpStatus.CREATED.value())
                        .message(AccountStatusMessage.CREATE_SUCCESS.getMessage())
                        .result(account)
                        .build());
    }

    @PutMapping("/{accountId}")
    ResponseEntity<AccountApiResponse<Account>> updateAccount(
            @PathVariable(name = "accountId") String accountId,
            @RequestBody @Valid AccountCreationRequest request) {
        Account account = accountService.updateAccount(accountId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(AccountApiResponse.<Account>builder()
                        .code(HttpStatus.OK.value())
                        .message(AccountStatusMessage.UPDATE_SUCCESS.getMessage())
                        .result(account)
                        .build());
    }

    @DeleteMapping("/{accountId}")
    ResponseEntity<AccountApiResponse<Void>> deleteAccount(
            @PathVariable(name = "accountId") String accountId) {
        accountService.deleteAccountById(accountId);
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(AccountApiResponse.<Void>builder()
                        .code(HttpStatus.OK.value())
                        .message(AccountStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
