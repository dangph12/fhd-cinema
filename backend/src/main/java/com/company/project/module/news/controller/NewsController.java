package com.company.project.module.news.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.news.common.NewsStatusMessage;
import com.company.project.module.news.dto.request.NewsCreationRequest;
import com.company.project.module.news.dto.response.NewsDto;
import com.company.project.module.news.service.NewsService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/news")
public class NewsController {

  private final NewsService newsService;

  public NewsController(NewsService newsService) {
    this.newsService = newsService;
  }

  @GetMapping
  ResponseEntity<ApiResponse<List<NewsDto>>> getAllNews() {
    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<List<NewsDto>>builder()
            .status(Status.SUCCESS.getValue())
            .message(NewsStatusMessage.GET_SUCCESS.getMessage())
            .data(newsService.getAllNews())
            .build());
  }

  @GetMapping("/{newsId}")
  ResponseEntity<ApiResponse<NewsDto>> getNewsById(@PathVariable String newsId) {
    NewsDto news = newsService.getNewsDtoById(newsId);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<NewsDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(NewsStatusMessage.GET_SUCCESS.getMessage())
            .data(news)
            .build());
  }

  @PostMapping
  ResponseEntity<ApiResponse<NewsDto>> addNews(@RequestBody @Valid NewsCreationRequest request) {
    NewsDto news = newsService.createNews(request);

    return ResponseEntity.status(HttpStatus.CREATED.value())
        .body(ApiResponse.<NewsDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(NewsStatusMessage.CREATE_SUCCESS.getMessage())
            .data(news)
            .build());
  }

  @PutMapping("/{newsId}")
  ResponseEntity<ApiResponse<NewsDto>> updateNews(@PathVariable String newsId,
      @RequestBody @Valid NewsCreationRequest request) {
    NewsDto news = newsService.updateNews(newsId, request);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<NewsDto>builder()
            .status(Status.SUCCESS.getValue())
            .message(NewsStatusMessage.UPDATE_SUCCESS.getMessage())
            .data(news)
            .build());
  }

  @DeleteMapping("/{newsId}")
  ResponseEntity<ApiResponse<Void>> deleteNews(@PathVariable String newsId) {
    newsService.deleteNewsById(newsId);

    return ResponseEntity.status(HttpStatus.OK.value())
        .body(ApiResponse.<Void>builder()
            .status(Status.SUCCESS.getValue())
            .message(NewsStatusMessage.DELETE_SUCCESS.getMessage())
            .build());
  }

  @GetMapping(params = "search")
  ResponseEntity<ApiResponse<ApiPagination<NewsDto>>> filterNews(
      @RequestParam(value = "search") String search,
      @RequestParam(value = "page", defaultValue = "1") int page,
      @RequestParam(value = "newsCategories", required = false) List<String> newsCategories,
      @RequestParam(value = "sortBy", defaultValue = "newsTitle") String sortBy,
      @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
      @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
    return ResponseEntity.ok().body(ApiResponse.<ApiPagination<NewsDto>>builder()
        .status(Status.SUCCESS.getValue())
        .message(NewsStatusMessage.GET_SUCCESS.getMessage())
        .data(newsService.filterNews(search, page, pageSize, newsCategories, sortBy, sortDirection))
        .build());
  }

}
