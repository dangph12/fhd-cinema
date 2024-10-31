package com.company.project.module.accounts.repository;

import java.util.List;
import java.util.Optional;

import com.company.project.module.accounts.entity.Account;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
  Optional<Account> findByAccountName(String accountName);

  Optional<Account> findByAccountId(String accountId);

  boolean existsByAccountIdAndIsDeletedFalse(String accountId);

  boolean existsByAccountNameAndIsDeletedFalse(String accountName);

  List<Account> findAllByIsDeletedFalse();

  Account findByAccountIdAndIsDeletedFalse(String accountId);

  Page<Account> findByAccountNameContainingIgnoreCaseAndIsDeletedFalse(String accountName, Pageable pageable);

  Page<Account> findByAccountNameContainingIgnoreCaseAndAccountTypeInAndIsDeletedFalse(String accountName,
      List<String> filters,
      Pageable pageable);

  long countByAccountNameContainingIgnoreCaseAndIsDeletedFalse(String accountName);

  long countByAccountNameContainingIgnoreCaseAndAccountTypeInAndIsDeletedFalse(String accountName,
      List<String> filters);

}
