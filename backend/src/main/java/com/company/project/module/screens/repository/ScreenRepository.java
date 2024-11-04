package com.company.project.module.screens.repository;

import java.util.List;

import com.company.project.module.screens.entity.Screen;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScreenRepository extends JpaRepository<Screen, String> {
  boolean existsByScreenIdAndIsDeletedFalse(String screenId);

  boolean existsByScreenNameAndIsDeletedFalse(String screenName);

  List<Screen> findAllByIsDeletedFalse();

  Screen findByScreenIdAndIsDeletedFalse(String screenId);

  List<Screen> findByScreenNameContainingIgnoreCaseAndIsDeletedFalse(String newsCategoryName);

  @Query("SELECT s FROM Screen s WHERE " +
      "s.isDeleted = false AND " +
      "(:screenName IS NULL OR LOWER(s.screenName) LIKE LOWER(CONCAT('%', :screenName, '%'))) AND " +
      "(:cinemas IS NULL OR (s.cinema.isDeleted = false AND " +
      "s.cinema.cinemaName IN :cinemas))")
  Page<Screen> searchScreens(@Param("screenName") String screenName,
      @Param("cinemas") List<String> cinemas,
      Pageable pageable);

  @Query("SELECT COUNT(s) FROM Screen s WHERE " +
      "s.isDeleted = false AND " +
      "(:screenName IS NULL OR LOWER(s.screenName) LIKE LOWER(CONCAT('%', :screenName, '%'))) AND " +
      "(:cinemas IS NULL OR (s.cinema.isDeleted = false AND " +
      "s.cinema.cinemaName IN :cinemas))")
  long countScreens(@Param("screenName") String screenName,
      @Param("cinemas") List<String> cinemas);
}
