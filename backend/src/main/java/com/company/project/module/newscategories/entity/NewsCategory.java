package com.company.project.module.newscategories.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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
}
