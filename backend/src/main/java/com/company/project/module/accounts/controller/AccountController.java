package com.company.project.module.accounts.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.accounts.common.AccountStatusMessage;
import com.company.project.module.accounts.dto.request.AccountCreationByAdminRequest;
import com.company.project.module.accounts.dto.request.AccountCreationRequest;
import com.company.project.module.accounts.dto.request.AccountUpdateRequest;
import com.company.project.module.accounts.dto.response.AccountDto;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

  private final AccountService accountService;

  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  @GetMapping
  public ResponseEntity<ApiResponse<List<AccountDto>>> getAllAccounts() {
    return ResponseEntity.ok(
      ApiResponse.<List<AccountDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(AccountStatusMessage.GET_SUCCESS.getMessage())
        .data(accountService.getAllAccounts())
        .build()
    );
  }

  @GetMapping("/{accountId}")
  public ResponseEntity<ApiResponse<AccountDto>> getAccountById(
    @PathVariable String accountId) {
    AccountDto accountDto = accountService.getAccountDtoById(accountId);

    return ResponseEntity.ok(
      ApiResponse.<AccountDto>builder()
        .status(Status.SUCCESS.getValue())
        .message(AccountStatusMessage.GET_SUCCESS.getMessage())
        .data(accountDto)
        .build()
    );
  }

  @GetMapping(params = "search")
  public ResponseEntity<ApiResponse<ApiPagination<AccountDto>>> filterAccountsByName(
    @RequestParam(value = "search") String search,
    @RequestParam(value = "page", defaultValue = "1") int page,
    @RequestParam(value = "filters", required = false) List<String> filters,
    @RequestParam(value = "sortBy", defaultValue = "accountName") String sortBy,
    @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
    @RequestParam(value = "pageSize", defaultValue = "10") int pageSize) {

    ApiPagination<AccountDto> accountPagination = accountService
      .searchAccounts(search, page, pageSize, filters, sortBy, sortDirection);

    return ResponseEntity.ok(
      ApiResponse.<ApiPagination<AccountDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(AccountStatusMessage.GET_SUCCESS.getMessage())
        .data(accountPagination)
        .build()
    );
  }

  @PostMapping
  public ResponseEntity<ApiResponse<AccountDto>> addAccount(
    @RequestBody @Valid AccountCreationRequest request) {
    AccountDto accountDto = accountService.createAccount(request);

    return ResponseEntity.status(HttpStatus.CREATED).body(
      ApiResponse.<AccountDto>builder()
        .status(Status.SUCCESS.getValue())
        .message(AccountStatusMessage.CREATE_SUCCESS.getMessage())
        .data(accountDto)
        .build()
    );
  }

  @PostMapping("/admin")
  public ResponseEntity<ApiResponse<AccountDto>> addAccountByAdmin(
    @RequestBody @Valid AccountCreationByAdminRequest request) {
    AccountDto accountDto = accountService.createAccountByAdmin(request);

    return ResponseEntity.status(HttpStatus.CREATED).body(
      ApiResponse.<AccountDto>builder()
        .status(Status.SUCCESS.getValue())
        .message(AccountStatusMessage.CREATE_SUCCESS.getMessage())
        .data(accountDto)
        .build()
    );
  }

  @PutMapping("/{accountId}")
  public ResponseEntity<ApiResponse<AccountDto>> updateAccount(
    @PathVariable String accountId,
    @RequestBody @Valid AccountUpdateRequest request) {

    AccountDto accountDto = accountService.updateAccount(accountId, request);

    return ResponseEntity.ok(
      ApiResponse.<AccountDto>builder()
        .status(Status.SUCCESS.getValue())
        .message(AccountStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(accountDto)
        .build()
    );
  }

  @DeleteMapping("/{accountId}")
  public ResponseEntity<ApiResponse<Void>> deleteAccount(
    @PathVariable String accountId) {
    accountService.deleteAccountById(accountId);

    return ResponseEntity.ok(
      ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(AccountStatusMessage.DELETE_SUCCESS.getMessage())
        .build()
    );
  }
}
