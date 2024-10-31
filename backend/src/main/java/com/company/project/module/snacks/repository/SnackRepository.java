package com.company.project.module.snacks.repository;

import java.util.List;

import com.company.project.module.snacks.entity.Snack;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnackRepository extends JpaRepository<Snack, String> {
  boolean existsBySnackNameAndIsDeletedFalse(String snackName);

  List<Snack> findAllByIsDeletedFalse();

  Snack findBySnackIdAndIsDeletedFalse(String snackId);

  Page<Snack> findBySnackNameContainingIgnoreCaseAndIsDeletedFalse(String snackName, Pageable pageable);

  long countBySnackNameContainingIgnoreCaseAndIsDeletedFalse(String snackName);
}
