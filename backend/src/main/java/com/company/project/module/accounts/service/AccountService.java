package com.company.project.module.accounts.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.request.AccountCreationByAdminRequest;
import com.company.project.module.accounts.dto.request.AccountCreationRequest;
import com.company.project.module.accounts.dto.request.AccountUpdateRequest;
import com.company.project.module.accounts.dto.response.AccountDto;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.exception.AccountException;
import com.company.project.module.accounts.repository.AccountRepository;
import com.company.project.module.customers.dto.request.CustomerCreationRequest;
import com.company.project.module.customers.entity.Customer;
import com.company.project.module.customers.service.CustomerService;
import com.company.project.module.emails.service.EmailService;
import com.company.project.utils.PasswordGenerator;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountService {

  private final ModelMapper modelMapper;
  private final AccountRepository accountRepository;
  private final CustomerService customerService;
  private final Utils utils;
  private final PasswordEncoder passwordEncoder;
  private final EmailService emailService;

  public AccountService(ModelMapper modelMapper, AccountRepository accountRepository,
      CustomerService customerService, Utils utils, EmailService emailService) {
    this.modelMapper = modelMapper;
    this.accountRepository = accountRepository;
    this.customerService = customerService;
    this.utils = utils;
    this.emailService = emailService;
    this.passwordEncoder = new BCryptPasswordEncoder(10); // Password encoder initialization
  }

  private AccountDto convertToAccountDto(Account account) {
    return modelMapper.map(account, AccountDto.class);
  }

  public List<AccountDto> getAllAccounts() {
    List<Account> accounts = accountRepository.findAllByIsDeletedFalse();
    return accounts.stream()
        .map(this::convertToAccountDto)
        .collect(Collectors.toList());
  }

  public Account getAccountById(String accountId) {
    Account account = accountRepository.findByAccountIdAndIsDeletedFalse(accountId);
    if (account == null) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.NOT_EXIST.getMessage());
    }
    return account;
  }

  public AccountDto getAccountDtoById(String accountId) {
    Account account = this.getAccountById(accountId);
    return this.convertToAccountDto(account);
  }

  public ApiPagination<AccountDto> searchAccounts(String accountName, int page, int pageSize,
      List<String> filters, String sortBy, String sortDirection) {

    if (page < 1 || pageSize < 1) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> accountFieldNames = utils.getEntityFields(Account.class);
    if (!accountFieldNames.contains(sortBy)) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);
    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Account> accountPage;
    long count;

    if (filters != null && !filters.isEmpty()) {
      accountPage = accountRepository.findByAccountNameContainingIgnoreCaseAndAccountTypeInAndIsDeletedFalse(
          accountName, filters, pageable);
      count = accountRepository.countByAccountNameContainingIgnoreCaseAndAccountTypeInAndIsDeletedFalse(accountName,
          filters);
    } else {
      accountPage = accountRepository.findByAccountNameContainingIgnoreCaseAndIsDeletedFalse(accountName, pageable);
      count = accountRepository.countByAccountNameContainingIgnoreCaseAndIsDeletedFalse(accountName);
    }

    List<AccountDto> accountDtos = accountPage.getContent().stream()
        .map(this::convertToAccountDto)
        .collect(Collectors.toList());

    return ApiPagination.<AccountDto>builder()
        .result(accountDtos)
        .count(count)
        .build();
  }

  private String generatePassword(int length) {
    PasswordGenerator passwordGenerator = new PasswordGenerator.PasswordGeneratorBuilder()
        .useDigits(true)
        .useLower(true)
        .useUpper(true)
        .build();
    String password = passwordGenerator.generate(length);
    return password;
  }

  @Transactional
  public AccountDto createAccountByAdmin(AccountCreationByAdminRequest request) {
    if (accountRepository.existsByAccountNameAndIsDeletedFalse(request.getAccountName())) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.EXIST_NAME.getMessage());
    }
    String password = this.generatePassword(8);

    Account account = Account.builder()
        .accountName(request.getAccountName())
        .accountPassword(encodePassword(password))
        .accountType(request.getAccountType())
        .build();

    accountRepository.save(account);

    Customer customer = null;
    if (request.getAccountType().equalsIgnoreCase("Customer")) {
      CustomerCreationRequest customerCreationRequest = new CustomerCreationRequest();
      customerCreationRequest.setCustomerName(request.getAccountName());
      customerCreationRequest.setCustomerPhone(request.getCustomerPhone());
      customerCreationRequest.setCustomerEmail(request.getCustomerEmail());
      customerCreationRequest.setAccountId(account.getAccountId());

      customer = customerService.createCustomer(customerCreationRequest);
    }

    AccountDto accountDto = this.convertToAccountDto(account);
    if (customer != null) {
      accountDto.setCustomerId(customer.getCustomerId());
      accountDto.setCustomerName(customer.getCustomerName());
      accountDto.setCustomerPhone(customer.getCustomerPhone());
      accountDto.setCustomerEmail(customer.getCustomerEmail());
    }

    emailService.sendEmailProvideLoginInformation(
        request.getCustomerEmail(), request.getAccountName(), password);

    return accountDto;
  }

  @Transactional
  public AccountDto createAccount(AccountCreationRequest request) {
    if (accountRepository.existsByAccountNameAndIsDeletedFalse(request.getAccountName())) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.EXIST_NAME.getMessage());
    }

    Account account = Account.builder()
        .accountName(request.getAccountName())
        .accountPassword(encodePassword(request.getAccountPassword()))
        .accountType(request.getAccountType())
        .build();

    accountRepository.save(account);

    Customer customer = createAssociatedCustomer(request, account.getAccountId());

    AccountDto accountDto = this.convertToAccountDto(account);
    accountDto.setCustomerId(customer.getCustomerId());
    accountDto.setCustomerName(customer.getCustomerName());
    accountDto.setCustomerPhone(customer.getCustomerPhone());
    accountDto.setCustomerEmail(customer.getCustomerEmail());

    return accountDto;
  }

  private Customer createAssociatedCustomer(AccountCreationRequest request, String accountId) {
    CustomerCreationRequest customerCreationRequest = new CustomerCreationRequest();
    customerCreationRequest.setCustomerName(request.getAccountName());
    customerCreationRequest.setCustomerPhone(request.getCustomerPhone());
    customerCreationRequest.setCustomerEmail(request.getCustomerEmail());
    customerCreationRequest.setAccountId(accountId);

    return customerService.createCustomer(customerCreationRequest);
  }

  public AccountDto updateAccount(String accountId, AccountUpdateRequest request) {
    Account existingAccount = this.getAccountById(accountId);

    if (!existingAccount.getAccountName().equals(request.getAccountName()) &&
        accountRepository.existsByAccountNameAndIsDeletedFalse(request.getAccountName())) {
      throw new AccountException(Status.FAIL.getValue(), AccountStatusMessage.EXIST_NAME.getMessage());
    }

    existingAccount.setAccountName(request.getAccountName());
    existingAccount.setAccountType(request.getAccountType());
    existingAccount.setAccountPassword(encodePassword(request.getAccountPassword()));

    accountRepository.save(existingAccount);
    return this.convertToAccountDto(existingAccount);
  }

  private String encodePassword(String password) {
    return passwordEncoder.encode(password);
  }

  public void deleteAccountById(String accountId) {
    Account existingAccount = this.getAccountById(accountId);

    existingAccount.getCustomer().setDeleted(true);
    existingAccount.setDeleted(true);
    accountRepository.save(existingAccount);
  }

  public void updateAccountPassword(String accountId, String newPassword) {
    Account account = this.getAccountById(accountId);
    account.setAccountPassword(encodePassword(newPassword));
    accountRepository.save(account);
  }

}
