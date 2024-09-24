package com.company.project.module.accounts.repository;

import com.company.project.module.accounts.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
    boolean existsByAccountId(String accountId);
    @Query("SELECT a FROM Account a")
    List<Account> findAllActiveAccounts();

}
