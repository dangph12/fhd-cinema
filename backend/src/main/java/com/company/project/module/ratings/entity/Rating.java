package com.company.project.module.ratings.entity;

import com.company.project.module.movies.entity.Movie;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "ratings")
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "rating_id")
    String ratingId;
    String ratingName;
    String ratingDescription;

    @OneToOne(mappedBy = "rating")
    Movie movie;
}
