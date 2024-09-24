package com.company.project.module.accounts.service;

import com.company.project.common.*;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.AccountCreationRequest;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.exception.AccountException;
import com.company.project.module.accounts.repository.AccountRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAllActiveAccounts();
    }

    public Account createAccount(AccountCreationRequest request) {
        Account account = Account.builder()
                .accountName(request.getAccountName())
                .accountPassword(request.getAccountPassword())
                .accountType(request.getAccountType())
                .build();
        return accountRepository.save(account);
    }

    public Account updateAccount(String accountId, AccountCreationRequest request) {
        Account existingAccount = accountRepository.findById(accountId)
                .orElseThrow(() -> new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage()));

        existingAccount.setAccountName(request.getAccountName());
        existingAccount.setAccountType(request.getAccountType());

        return accountRepository.save(existingAccount);
    }

    public void deleteAccountById(String accountId) {
        if (!accountRepository.existsById(accountId)) {
            throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage());
        }
        accountRepository.deleteById(accountId);
    }
}
