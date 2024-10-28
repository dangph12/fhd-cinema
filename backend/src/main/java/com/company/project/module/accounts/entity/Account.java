package com.company.project.module.accounts.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import com.company.project.module.customers.entity.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
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
    @Column(name = "account_id")
    String accountId;

    String accountName;

    @JsonIgnore
    String accountPassword;

    String accountType;

    @JsonIgnore
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude // Exclude to prevent infinite hashCode recursion
    @ToString.Exclude // Exclude to prevent infinite toString recursion
    Customer customer;

    @Builder.Default
    boolean isDeleted = false;
}
