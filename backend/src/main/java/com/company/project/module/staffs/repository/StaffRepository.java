package com.company.project.module.staffs.repository;

import com.company.project.module.accounts.entity.Account;
import com.company.project.module.staffs.entity.Staff;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends JpaRepository<Staff, String> {
    boolean existsByStaffName(String staffName);
    boolean existsByStaffId(String staffId);
    Staff findByAccount(Account account);
}
