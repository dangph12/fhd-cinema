package com.company.project.module.snacks.repository;

import com.company.project.module.snacks.entity.Snack;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnackRepository extends JpaRepository<Snack, String> {
  boolean existsBySnackName(String snackName);
  Page<Snack> findBySnackNameContainingIgnoreCase(String snackName, Pageable pageable);
  long countBySnackNameContainingIgnoreCase(String snackName);
}
