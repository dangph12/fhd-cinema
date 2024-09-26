package com.company.project.module.screens.repository;

import com.company.project.module.screens.entity.Screen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScreenRepository extends JpaRepository<Screen, String> {
    boolean existsByScreenId(String screenId);
}
