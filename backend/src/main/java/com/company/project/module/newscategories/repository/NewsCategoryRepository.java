package com.company.project.module.newscategories.repository;

import java.util.List;

import com.company.project.module.newscategories.entity.NewsCategory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsCategoryRepository extends JpaRepository<NewsCategory, String> {
  boolean existsByNewsCategoryNameAndIsDeletedFalse(String newsCategoryName);

  List<NewsCategory> findAllByIsDeletedFalse();

  NewsCategory findByNewsCategoryIdAndIsDeletedFalse(String newsCategoryId);

  Page<NewsCategory> findByNewsCategoryNameContainingIgnoreCaseAndIsDeletedFalse(String newsCategoryName,
      Pageable pageable);

  long countByNewsCategoryNameContainingIgnoreCaseAndIsDeletedFalse(String newsCategoryName);
}
