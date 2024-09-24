package com.company.project.module.staffs.entity;

import com.company.project.module.accounts.entity.Account;
import com.company.project.module.staffroles.entity.StaffRole;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "staffs")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String staffId;

    String staffName;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", referencedColumnName = "account_id")
    Account account;

    @ManyToOne
    @JoinColumn(name="staff_role_id", nullable=false)
    StaffRole staffRole;
}
