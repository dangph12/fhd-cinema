package com.company.project.module.newscategories.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import com.company.project.module.news.entity.News;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name = "news_categories")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class NewsCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String newsCategoryId;
    String newsCategoryName;

    @JsonIgnore
    @OneToMany(mappedBy = "newsCategory", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<News> news;

}
