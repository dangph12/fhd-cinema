package com.company.project.accounts.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "accounts")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String accountId;

    String accountName;
    String accountPassword;
    int accountType;
}
