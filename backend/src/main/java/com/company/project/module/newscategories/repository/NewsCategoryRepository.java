package com.company.project.module.newscategories.repository;

import com.company.project.module.newscategories.entity.NewsCategory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsCategoryRepository extends JpaRepository<NewsCategory, String> {
  boolean existsByNewsCategoryName(String newsCateogryName);
  Page<NewsCategory> findByNewsCategoryNameContainingIgnoreCase(String newsCategoryName, Pageable pageable);
  long countByNewsCategoryNameContainingIgnoreCase(String newsCategoryName);
}
