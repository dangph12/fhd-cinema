package com.company.project.module.staffroles.repository;

import com.company.project.module.staffroles.entity.StaffRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRoleRepository extends JpaRepository<StaffRole, String> {
    boolean existsByStaffRoleId(String staffRoleId);
    boolean existsByStaffRoleName(String staffRoleName);
}
