package com.company.project.module.news.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

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
}
