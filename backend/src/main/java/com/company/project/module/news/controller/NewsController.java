package com.company.project.module.news.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.news.common.NewsStatusMessage;
import com.company.project.module.news.dto.request.NewsCreationRequest;
import com.company.project.module.news.entity.News;
import com.company.project.module.news.service.NewsService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<News>>> getAllNews() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<News>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(NewsStatusMessage.GET_SUCCESS.getMessage())
                        .data(newsService.getAllNews())
                        .build());
    }

    @GetMapping("/{newsId}")
    ResponseEntity<ApiResponse<News>> getNewsById(@PathVariable String newsId) {
        News news = newsService.getNewsById(newsId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<News>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(NewsStatusMessage.GET_SUCCESS.getMessage())
                        .data(news)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<News>> addNews(@RequestBody @Valid NewsCreationRequest request) {
        News news = newsService.createNews(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<News>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(NewsStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(news)
                        .build());
    }

    @PutMapping("/{newsId}")
    ResponseEntity<ApiResponse<News>> updateNews(@PathVariable String newsId, @RequestBody @Valid NewsCreationRequest request) {
        News news = newsService.updateNews(newsId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<News>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(NewsStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(news)
                        .build());
    }

    @DeleteMapping("/{newsId}")
    ResponseEntity<ApiResponse<News>> deleteNews(@PathVariable String newsId) {
        newsService.deleteNews(newsId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<News>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(NewsStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
