package com.company.project.module.accounts.repository;

import java.util.List;

import com.company.project.module.accounts.entity.Account;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
  boolean existsByAccountId(String accountId);
  boolean existsByAccountName(String accountName);
  Page<Account> findByAccountNameContainingIgnoreCase(String accountName, Pageable pageable);
  Page<Account> findByAccountNameContainingIgnoreCaseAndAccountTypeIn(String accountName, List<Integer> accountTypes, Pageable pageable);
  long countByAccountNameContainingIgnoreCase(String accountName);
  long countByAccountNameContainingIgnoreCaseAndAccountTypeIn(String accountName, List<Integer> accountTypes);
}
