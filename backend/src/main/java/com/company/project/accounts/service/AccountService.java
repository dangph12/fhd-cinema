package com.company.project.accounts.service;

import com.company.project.accounts.dto.request.AccountCreationRequest;
import com.company.project.accounts.entity.Account;
import com.company.project.accounts.repository.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Account createAccount(AccountCreationRequest request) {
        Account account = Account.builder()
                .accountName(request.getAccountName())
                .accountPassword(request.getAccountPassword())
                .accountType(request.getAccountType())
                .build();
        return accountRepository.save(account);
    }
}
