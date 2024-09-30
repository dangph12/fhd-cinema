package com.company.project.module.snacks.repository;

import com.company.project.module.snacks.entity.Snack;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnackRepository extends JpaRepository<Snack, String> {
  boolean existsBySnackName(String snackName);
}
