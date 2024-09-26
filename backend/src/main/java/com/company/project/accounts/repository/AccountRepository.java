package com.company.project.accounts.repository;

import com.company.project.accounts.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
    boolean existsByAccountId(String accountId);
}
