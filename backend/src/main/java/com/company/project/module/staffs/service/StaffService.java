package com.company.project.module.staffs.service;

import com.company.project.common.Status;
import com.company.project.module.accounts.entity.Account;
import com.company.project.module.accounts.repository.AccountRepository;
import com.company.project.module.staffroles.entity.StaffRole;
import com.company.project.module.staffroles.repository.StaffRoleRepository;
import com.company.project.module.staffs.common.StaffStatusMessage;
import com.company.project.module.staffs.dto.request.StaffCreationRequest;
import com.company.project.module.staffs.entity.Staff;
import com.company.project.module.staffs.exception.StaffException;
import com.company.project.module.staffs.repository.StaffRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {

    private final StaffRepository staffRepository;
    private final AccountRepository accountRepository;
    private final StaffRoleRepository staffRoleRepository;

    public StaffService(StaffRepository staffRepository, AccountRepository accountRepository, StaffRoleRepository staffRoleRepository) {
        this.staffRepository = staffRepository;
        this.accountRepository = accountRepository;
        this.staffRoleRepository = staffRoleRepository;
    }

    public List<Staff> findAllStaffs() {
        return staffRepository.findAll();
    }

    public Staff findByStaffId(String staffId) {
        return staffRepository.findById(staffId).orElseThrow(() -> new StaffException(Status.FAIL.getValue(), StaffStatusMessage.NOT_EXIST.getMessage()));
    }

    public Staff createStaff(StaffCreationRequest request) {
        if(staffRepository.existsByStaffName(request.getStaffName())) {
            throw new StaffException(Status.FAIL.getValue(), StaffStatusMessage.STAFF_EXIST.getMessage());
        }

        Account account = accountRepository.findById(request.getAccountId())
                .orElseThrow(() -> new StaffException(Status.FAIL.getValue(), "Account not found"));

        StaffRole staffRole = staffRoleRepository.findById(request.getStaffRoleId())
                .orElseThrow(() -> new StaffException(Status.FAIL.getValue(), "StaffRole not found"));

        Staff staff = Staff.builder()
                .account(account)
                .staffRole(staffRole)
                .staffName(request.getStaffName())
                .build();

        return staffRepository.save(staff);
    }

    public Staff updateStaff(String staffId, StaffCreationRequest request) {
        if(!staffRepository.existsByStaffId(staffId)) {
            throw new StaffException(Status.FAIL.getValue(), StaffStatusMessage.NOT_EXIST.getMessage());
        }

        Staff staff = findByStaffId(staffId);

        Account account = accountRepository.findById(request.getAccountId())
                .orElseThrow(() -> new StaffException(Status.FAIL.getValue(), "Account not found"));

        StaffRole staffRole = staffRoleRepository.findById(request.getStaffRoleId())
                .orElseThrow(() -> new StaffException(Status.FAIL.getValue(), "StaffRole not found"));

        staff.setAccount(account);
        staff.setStaffRole(staffRole);
        staff.setStaffName(request.getStaffName());

        return staffRepository.save(staff);
    }

    public void deleteStaff(String staffId) {
        if(!staffRepository.existsByStaffId(staffId)) {
            throw new StaffException(Status.FAIL.getValue(), StaffStatusMessage.NOT_EXIST.getMessage());
        }
        staffRepository.deleteById(staffId);
    }

}
