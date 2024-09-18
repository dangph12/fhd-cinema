package com.company.project.accounts.controller;

import com.company.project.accounts.entity.Account;
import com.company.project.accounts.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping
    List<Account> getAllAccount() {
        return accountService.getAllAccounts();
    }
}
