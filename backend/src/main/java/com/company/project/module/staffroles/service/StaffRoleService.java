package com.company.project.module.staffroles.service;

import com.company.project.common.Status;
import com.company.project.module.staffroles.common.StaffRoleStatusMessage;
import com.company.project.module.staffroles.dto.request.StaffRoleCreationRequest;
import com.company.project.module.staffroles.entity.StaffRole;
import com.company.project.module.staffroles.exception.StaffRoleException;
import com.company.project.module.staffroles.repository.StaffRoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffRoleService {

    private final StaffRoleRepository staffRoleRepository;

    public StaffRoleService(StaffRoleRepository staffRoleRepository) {
        this.staffRoleRepository = staffRoleRepository;
    }

    public List<StaffRole> getAllStaffRoles() {
        return staffRoleRepository.findAll();
    }

    public StaffRole getStaffRoleByStaffRoleId(String staffRoleId) {
        return staffRoleRepository.findById(staffRoleId).orElseThrow(() -> new StaffRoleException(Status.FAIL.getValue(), StaffRoleStatusMessage.NOT_EXIST.getMessage()));
    }

    public StaffRole createStaffRole(StaffRoleCreationRequest request) {
        if(staffRoleRepository.existsByStaffRoleName(request.getStaffRoleName())) {
            throw new StaffRoleException(Status.FAIL.getValue(), StaffRoleStatusMessage.STAFF_ROLE_EXIST.getMessage());
        }

        StaffRole staffRole = StaffRole.builder()
                .staffRoleName(request.getStaffRoleName())
                .build();

        return staffRoleRepository.save(staffRole);
    }

    public StaffRole updateStaffRole(String staffRoleId, StaffRoleCreationRequest request) {
        if(!staffRoleRepository.existsByStaffRoleId(staffRoleId)) {
            throw new StaffRoleException(Status.FAIL.getValue(), StaffRoleStatusMessage.NOT_EXIST.getMessage());
        }

        StaffRole existStaffRole = getStaffRoleByStaffRoleId(staffRoleId);

        existStaffRole.setStaffRoleName(request.getStaffRoleName());

        return staffRoleRepository.save(existStaffRole);
    }

    public void deleteStaffRole(String staffRoleId) {
        if(!staffRoleRepository.existsByStaffRoleId(staffRoleId)) {
            throw new StaffRoleException(Status.FAIL.getValue(), StaffRoleStatusMessage.NOT_EXIST.getMessage());
        }

        staffRoleRepository.deleteById(staffRoleId);
    }

}
