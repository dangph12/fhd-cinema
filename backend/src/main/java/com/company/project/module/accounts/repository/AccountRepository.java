package com.company.project.module.accounts.repository;

import com.company.project.module.accounts.entity.Account;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
  boolean existsByAccountId(String accountId);
  boolean existsByAccountName(String accountName);
  Optional<Account> findByAccountName(String accountName);
  Page<Account> findByAccountNameContainingIgnoreCase(String accountName, Pageable pageable);
}
