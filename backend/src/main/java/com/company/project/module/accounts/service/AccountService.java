package com.company.project.module.accounts.service;

import com.company.project.common.*;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.AccountCreationRequest;
import com.company.project.module.accounts.dto.AccountDto;
import com.company.project.module.accounts.dto.AccountUpdateRequest;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.exception.AccountException;
import com.company.project.module.accounts.repository.AccountRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService {

    @Autowired
    private final ModelMapper modelMapper;

    private final AccountRepository accountRepository;

    public AccountService(ModelMapper modelMapper, AccountRepository accountRepository) {
        this.modelMapper = modelMapper;
        this.accountRepository = accountRepository;
    }

    public List<AccountDto> getAllAccounts() {
        List<Account> accounts = accountRepository.findAll();

        List<AccountDto> accountDtos = new ArrayList<>();

        for(Account account : accounts) {
            AccountDto accountDto = modelMapper.map(account, AccountDto.class);
            if (account.getAccountType() == 1) {
                accountDto.setAccountType("Customer");
            } else {
                accountDto.setAccountType("Staff");
            }
            accountDtos.add(accountDto);
        }

        return accountDtos;
    }

    public AccountDto createAccount(AccountCreationRequest request) {
        Account account = Account.builder()
                .accountName(request.getAccountName())
                .accountPassword(request.getAccountPassword())
                .accountType(request.getAccountType())
                .build();
        accountRepository.save(account);
        AccountDto accountDto = modelMapper.map(account, AccountDto.class);
        if (account.getAccountType() == 1) {
            accountDto.setAccountType("Customer");
        } else {
            accountDto.setAccountType("Staff");
        }
        return accountDto;
    }

    public AccountDto updateAccount(String accountId, AccountUpdateRequest request) {
        Account existingAccount = accountRepository.findById(accountId)
                .orElseThrow(() -> new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage()));

        existingAccount.setAccountName(request.getAccountName());
        existingAccount.setAccountType(request.getAccountType());

        accountRepository.save(existingAccount);

        AccountDto accountDto = modelMapper.map(existingAccount, AccountDto.class);
        if (existingAccount.getAccountType() == 1) {
            accountDto.setAccountType("Customer");
        } else {
            accountDto.setAccountType("Staff");
        }
        return accountDto;
    }

    public void deleteAccountById(String accountId) {
        if (!accountRepository.existsById(accountId)) {
            throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage());
        }
        accountRepository.deleteById(accountId);
    }
}
