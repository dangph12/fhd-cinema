package com.company.project.module.news.repository;

import java.util.List;

import com.company.project.module.news.entity.News;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, String> {
    boolean existsByNewsId(String newsId);
    boolean existsByNewsTitle(String newsTitle);

    @Query("SELECT n FROM News n WHERE " +
           "(:newsTitle IS NULL OR LOWER(n.newsTitle) LIKE LOWER(CONCAT('%', :newsTitle, '%'))) AND " +
           "(:newsCategories IS NULL OR n.newsCategory.newsCategoryName IN :newsCategories)")
    Page<News> searchNews(@Param("newsTitle") String newsTitle,
                             @Param("newsCategories") List<String> newsCategories,
                             Pageable pageable);

    @Query("SELECT COUNT(n) FROM News n WHERE " +
           "(:newsTitle IS NULL OR LOWER(n.newsTitle) LIKE LOWER(CONCAT('%', :newsTitle, '%'))) AND " +
           "(:newsCategories IS NULL OR n.newsCategory.newsCategoryName IN :newsCategories)")
    long countNews(@Param("newsTitle") String newsTitle,
                       @Param("newsCategories") List<String> newsCategories);

}
