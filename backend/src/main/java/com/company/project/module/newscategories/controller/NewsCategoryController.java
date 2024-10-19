package com.company.project.module.newscategories.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.newscategories.common.NewsCategoryStatusMessage;
import com.company.project.module.newscategories.dto.request.NewsCategoryCreationRequest;
import com.company.project.module.newscategories.entity.NewsCategory;
import com.company.project.module.newscategories.service.NewsCategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/newscategories")
public class NewsCategoryController {
  
  @Autowired
  private NewsCategoryService newsCategoryService;

  @GetMapping()
  ResponseEntity<ApiResponse<List<NewsCategory>>> getAllNewsCategory() {
    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<List<NewsCategory>>builder()
      .status(Status.SUCCESS.getValue())
      .message(NewsCategoryStatusMessage.GET_SUCCESS.getMessage())
      .data(newsCategoryService.getAllNewsCategory())
      .build());
  }

  @GetMapping("/{newsCategoryId}")
  ResponseEntity<ApiResponse<NewsCategory>> getNewsCategoryById(@PathVariable(name = "newsCategoryId") String newsCategoryId) {
    NewsCategory newsCategory = newsCategoryService.getNewsCategoryById(newsCategoryId);

    return ResponseEntity.status(HttpStatus.OK.value())
    .body(ApiResponse.<NewsCategory>builder()
      .status(Status.SUCCESS.getValue())
      .message(NewsCategoryStatusMessage.GET_SUCCESS.getMessage())
      .data(newsCategory)
      .build());
  }
  
  @PostMapping
  ResponseEntity<ApiResponse<NewsCategory>> addNewsCategory(
    @RequestBody @Valid NewsCategoryCreationRequest request) {
    NewsCategory newsCategory =  newsCategoryService.createNewsCategory(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
    .body(ApiResponse.<NewsCategory>builder()
      .status(Status.SUCCESS.getValue())
      .message(NewsCategoryStatusMessage.CREATE_SUCCESS.getMessage())
      .data(newsCategory)
      .build());
  }

  @PutMapping("/{newsCategoryId}")
  ResponseEntity<ApiResponse<NewsCategory>> updateNewsCategory(
    @PathVariable(name = "newsCategoryId") String newsCategoryId,
    @Valid @RequestBody NewsCategoryCreationRequest request) {
    NewsCategory newsCategory = newsCategoryService.updateNewsCategory(newsCategoryId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<NewsCategory>builder()
        .status(Status.SUCCESS.getValue())
        .message(NewsCategoryStatusMessage.UPDATE_SUCCESS.getMessage())
        .data(newsCategory)
        .build());
  }

  @DeleteMapping("/{newsCategoryId}")
  ResponseEntity<ApiResponse<Void>> deleteNewsCategory(
    @PathVariable(name = "newsCategoryId") String newsCategoryId) {
    newsCategoryService.deleteNewsCategoryById(newsCategoryId);

    return ResponseEntity.status(HttpStatus.OK.value())
      .body(ApiResponse.<Void>builder()
        .status(Status.SUCCESS.getValue())
        .message(NewsCategoryStatusMessage.DELETE_SUCCESS.getMessage())
        .build());
  }

}
