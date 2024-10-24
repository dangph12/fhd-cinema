package com.company.project.module.news.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.company.project.module.newscategories.entity.NewsCategory;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "news")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String newsId;

    String newsTitle;
    String newsDescription;

    @Column(name = "news_created_at")
    LocalDateTime newsCreateAt;

    String newsImageUrl;

    @ManyToOne()
    @JoinColumn(name = "news_category_id", nullable = false)
    NewsCategory newsCategory;

    @Builder.Default
    boolean isDeleted = false;
}
