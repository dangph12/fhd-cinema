package com.company.project.accounts.controller;

import com.company.project.accounts.dto.request.AccountApiResponse;
import com.company.project.accounts.dto.request.AccountCreationRequest;
import com.company.project.accounts.entity.Account;
import com.company.project.accounts.service.AccountService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    AccountApiResponse<Account> addAccount(@RequestBody @Valid AccountCreationRequest request) {
        AccountApiResponse<Account> accountApiResponse = new AccountApiResponse<>();

        Account account = accountService.createAccount(request);

        accountApiResponse.setResult(account);

        return accountApiResponse;
    }

    @GetMapping
    List<Account> getAllAccount() {
        return accountService.getAllAccounts();
    }
}
