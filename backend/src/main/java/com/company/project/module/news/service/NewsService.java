package com.company.project.module.news.service;

import java.util.List;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.news.common.NewsStatusMessage;
import com.company.project.module.news.dto.request.NewsCreationRequest;
import com.company.project.module.news.entity.News;
import com.company.project.module.news.exception.NewsException;
import com.company.project.module.news.repository.NewsRepository;
import com.company.project.module.newscategories.entity.NewsCategory;
import com.company.project.module.newscategories.service.NewsCategoryService;
import com.company.project.utils.Utils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class NewsService {

    private final NewsRepository newsRepository;

    private final NewsCategoryService newsCategoryService;

    private final Utils utils;

    public NewsService(NewsRepository newsRepository, NewsCategoryService newsCategoryService, Utils utils) {
        this.newsRepository = newsRepository;
        this.newsCategoryService = newsCategoryService;
        this.utils = utils;
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    public News getNewsById(String newsId) {
        return newsRepository.findById(newsId).orElseThrow(() -> new NewsException(Status.FAIL.getValue(), NewsStatusMessage.NOT_EXIST.getMessage()));
    }

    public News createNews(NewsCreationRequest request) {
        if(newsRepository.existsByNewsTitle(request.getNewsTitle())) {
            throw new NewsException(Status.FAIL.getValue(), NewsStatusMessage.EXIST_TITLE.getMessage());
        }

        NewsCategory newsCategory = newsCategoryService.getNewsCategoryById(request.getNewsCategoryId());

        News news = News.builder()
                .newsTitle(request.getNewsTitle())
                .newsDescription(request.getNewsDescription())
                .newsCreateAt(request.getNewsCreateAt())
                .newsImageUrl(request.getNewsImageUrl())
                .newsCategory(newsCategory)
                .build();

        return newsRepository.save(news);
    }

    public News updateNews(String newsId, NewsCreationRequest request) {
        News news = this.getNewsById(newsId);

        NewsCategory newsCategory = newsCategoryService.getNewsCategoryById(request.getNewsCategoryId());

        news.setNewsTitle(request.getNewsTitle());
        news.setNewsDescription(request.getNewsDescription());
        news.setNewsCreateAt(request.getNewsCreateAt());
        news.setNewsImageUrl(request.getNewsImageUrl());
        news.setNewsCategory(newsCategory);

        return newsRepository.save(news);
    }

    public void deleteNews(String newsId) {
        if(!newsRepository.existsByNewsId(newsId)) {
            throw new NewsException(Status.FAIL.getValue(), NewsStatusMessage.NOT_EXIST.getMessage());
        }

        newsRepository.deleteById(newsId);
    }

    public ApiPagination<News> filterNews(String newsTitle, int page, int pageSize,
          List<String> newsCategories, String sortBy, String sortDirection) {
      if (page < 1 || pageSize < 1) {
        throw new NewsException(Status.FAIL.getValue(), NewsStatusMessage.LESS_THAN_ZERO.getMessage());
      }

      List<String> newsFieldNames = utils.getEntityFields(News.class);

      if (!newsFieldNames.contains(sortBy)) {
        throw new NewsException(Status.FAIL.getValue(), NewsStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
      }

      Sort.Direction direction = Sort.Direction.fromString(sortDirection);

      Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

      Page<News> newsPages = newsRepository.searchNews(newsTitle, newsCategories, pageable);
      long count = newsRepository.countNews(newsTitle, newsCategories);

      ApiPagination<News> newsPagination = ApiPagination.<News>builder()
          .result(newsPages.getContent())
          .count(count)
          .build();
      
      return newsPagination;
    }

}
