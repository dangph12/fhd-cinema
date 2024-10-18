package com.company.project.module.news.repository;

import com.company.project.module.news.entity.News;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, String> {
    boolean existsByNewsId(String newsId);
    boolean existsByNewsTitle(String newsTitle);
}
