package com.company.project.accounts.service;

import com.company.project.accounts.dto.request.AccountCreationRequest;
import com.company.project.accounts.entity.Account;
import com.company.project.accounts.exception.AccountException;
import com.company.project.accounts.repository.AccountRepository;
import com.company.project.tickets.common.TicketStatusMessage;
import com.company.project.tickets.entity.Ticket;
import com.company.project.tickets.exception.TicketException;
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

    public Account updateAccount(String accountId, AccountCreationRequest request) {
        Account existingAccount = accountRepository.findById(accountId)
                .orElseThrow(() -> new AccountException(HttpStatus.NOT_FOUND.value(), AccountStatusMessage.NOT_EXIST.getMessage()));

        existingAccount.setAccountName(request.getAccountName());
        existingAccount.setAccountType(request.getAccountType());

        return accountRepository.save(existingAccount);
    }

    public void deleteAccountById(String accountId) {
        if (!accountRepository.existsById(accountId)) {
            throw new AccountException(HttpStatus.NOT_FOUND.value(), AccountStatusMessage.NOT_EXIST.getMessage());
        }
        accountRepository.deleteById(accountId);
    }
}
