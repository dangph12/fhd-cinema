package com.company.project.module.accounts.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.request.AccountCreationRequest;
import com.company.project.module.accounts.dto.request.AccountUpdateRequest;
import com.company.project.module.accounts.dto.response.AccountDto;
import com.company.project.module.accounts.dto.response.AccountPagination;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.exception.AccountException;
import com.company.project.module.accounts.repository.AccountRepository;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

  private final ModelMapper modelMapper;
  @Autowired
  private final ModelMapper modelMapper;

  private final AccountRepository accountRepository;
  private final AccountRepository accountRepository;

  public AccountService(ModelMapper modelMapper, AccountRepository accountRepository) {
    this.modelMapper = modelMapper;
    this.accountRepository = accountRepository;
  }
  public AccountService(ModelMapper modelMapper, AccountRepository accountRepository) {
    this.modelMapper = modelMapper;
    this.accountRepository = accountRepository;
  }

  public List<AccountDto> getAllAccounts() {
    List<Account> accounts = accountRepository.findAll();
  public List<AccountDto> getAllAccounts() {
    List<Account> accounts = accountRepository.findAll();

    List<AccountDto> accountDtos = new ArrayList<>();
    List<AccountDto> accountDtos = new ArrayList<>();

    for (Account account : accounts) {
      AccountDto accountDto = this.convertToAccountDto(account);
      accountDtos.add(accountDto);
    }

    return accountDtos;
  }

  public AccountDto getAccountById(String accountId) {
    Account account = accountRepository.findById(accountId)
        .orElseThrow(() -> new AccountException(
            Status.FAIL.getValue(),
            AccountStatusMessage.NOT_EXIST.getMessage()));

    return this.convertToAccountDto(account);
  }

  public AccountPagination searchAccountsByName(String accountName, int page, List<String> filters, String sortBy) {
    int pageSize = 2;

    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(sortBy));

    List<Integer> accountTypes = this.convertToAccountTypes(filters);

    Page<Account> accountPage;
    long count;

    if (!accountTypes.isEmpty()) {
      accountPage = accountRepository.findByAccountNameContainingIgnoreCaseAndAccountTypeIn(
        accountName, accountTypes, pageable);
      count = accountRepository.countByAccountNameContainingIgnoreCaseAndAccountTypeIn(accountName, accountTypes);
    } else {
      accountPage = accountRepository.findByAccountNameContainingIgnoreCase(accountName, pageable);
      count = accountRepository.countByAccountNameContainingIgnoreCase(accountName);
    }

    List<AccountDto> accountDtos = accountPage.getContent().stream()
        .map(this::convertToAccountDto)
        .collect(Collectors.toList());

    AccountPagination accountPagination = AccountPagination.builder()
        .accountDtos(accountDtos)
        .count(count)
        .build();

    return accountPagination;
  }

  private List<Integer> convertToAccountTypes(List<String> filters) {
    List<Integer> accountTypes = filters != null ? filters.stream()
        .map(filter -> {
          if ("Customer".equalsIgnoreCase(filter))
            return 1;
          else if ("Staff".equalsIgnoreCase(filter))
            return 2;
          else
            return null;
        })
        .filter(Objects::nonNull)
        .collect(Collectors.toList()) : Collections.emptyList();
    return accountTypes;
  }

  private AccountDto convertToAccountDto(Account account) {
    AccountDto accountDto = modelMapper.map(account, AccountDto.class);
    if (account.getAccountType() == 1) {
      accountDto.setAccountType("Customer");
    } else {
      accountDto.setAccountType("Staff");
    }

    return accountDto;
  }

  public AccountDto createAccount(AccountCreationRequest request) {
    if (accountRepository.existsByAccountName(request.getAccountName())) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.EXIST_NAME.getMessage());
    }

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
    String password = passwordEncoder.encode(request.getAccountPassword());

    Account account = Account.builder()
        .accountName(request.getAccountName())
        .accountPassword(password)
        .accountType(request.getAccountType())
        .build();
    accountRepository.save(account);

    return this.convertToAccountDto(account);
  }

  public AccountDto updateAccount(String accountId, AccountUpdateRequest request) {
    Account existingAccount = accountRepository.findById(accountId)
        .orElseThrow(() -> new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage()));

    existingAccount.setAccountName(request.getAccountName());
    existingAccount.setAccountType(request.getAccountType());
    existingAccount.setAccountName(request.getAccountName());
    existingAccount.setAccountType(request.getAccountType());

    accountRepository.save(existingAccount);

    return this.convertToAccountDto(existingAccount);
  }

  public void deleteAccountById(String accountId) {
    if (!accountRepository.existsById(accountId)) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage());
    }
    accountRepository.deleteById(accountId);
  }

}
