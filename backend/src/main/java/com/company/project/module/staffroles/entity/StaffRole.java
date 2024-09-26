package com.company.project.module.staffroles.entity;

import com.company.project.module.staffs.entity.Staff;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "staff_roles")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class StaffRole {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String staffRoleId;

    String staffRoleName;
    int staffRoleType;

    @JsonIgnore
    @OneToMany(mappedBy = "staffRole")
    List<Staff> staffs;

}
