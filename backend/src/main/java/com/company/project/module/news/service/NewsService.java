package com.company.project.module.news.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.news.common.NewsStatusMessage;
import com.company.project.module.news.dto.request.NewsCreationRequest;
import com.company.project.module.news.dto.response.NewsDto;
import com.company.project.module.news.entity.News;
import com.company.project.module.news.exception.NewsException;
import com.company.project.module.news.repository.NewsRepository;
import com.company.project.module.newscategories.entity.NewsCategory;
import com.company.project.module.newscategories.service.NewsCategoryService;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
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
  private final ModelMapper modelMapper;

  public NewsService(NewsRepository newsRepository, NewsCategoryService newsCategoryService, Utils utils,
      ModelMapper modelMapper) {
    this.newsRepository = newsRepository;
    this.newsCategoryService = newsCategoryService;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private NewsDto convertToNewsDto(News news) {
    return modelMapper.map(news, NewsDto.class);
  }

  public List<NewsDto> getAllNews() {
    List<News> newsList = newsRepository.findAllByIsDeletedFalse();
    return newsList.stream()
        .map(this::convertToNewsDto)
        .collect(Collectors.toList());
  }

  public News getNewsById(String newsId) {
    News news = newsRepository.findByNewsIdAndIsDeletedFalse(newsId);
    if (news == null) {
      throw new NewsException(Status.FAIL.getValue(), NewsStatusMessage.NOT_EXIST.getMessage());
    }
    return news;
  }

  public NewsDto getNewsDtoById(String newsId) {
    News news = this.getNewsById(newsId);
    return this.convertToNewsDto(news);
  }

  public ApiPagination<NewsDto> filterNews(String newsTitle, int page, int pageSize,
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

    List<NewsDto> newsDtos = newsPages.getContent().stream()
        .map(this::convertToNewsDto)
        .collect(Collectors.toList());

    return ApiPagination.<NewsDto>builder()
        .result(newsDtos)
        .count(count)
        .build();
  }

  public NewsDto createNews(NewsCreationRequest request) {
    if (newsRepository.existsByNewsTitleAndIsDeletedFalse(request.getNewsTitle())) {
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

    newsRepository.save(news);
    return this.convertToNewsDto(news);
  }

  public NewsDto updateNews(String newsId, NewsCreationRequest request) {
    News existedNews = this.getNewsById(newsId);

    if (!existedNews.getNewsTitle().equals(request.getNewsTitle()) &&
        newsRepository.existsByNewsTitleAndIsDeletedFalse(request.getNewsTitle())) {
      throw new NewsException(Status.FAIL.getValue(), NewsStatusMessage.EXIST_TITLE.getMessage());
    }

    NewsCategory newsCategory = newsCategoryService.getNewsCategoryById(request.getNewsCategoryId());

    existedNews.setNewsDescription(request.getNewsDescription());
    existedNews.setNewsCreateAt(request.getNewsCreateAt());
    existedNews.setNewsImageUrl(request.getNewsImageUrl());
    existedNews.setNewsCategory(newsCategory);

    if (!existedNews.getNewsTitle().equals(request.getNewsTitle())) {
      existedNews.setNewsTitle(request.getNewsTitle());
    }

    newsRepository.save(existedNews);
    return this.convertToNewsDto(existedNews);
  }

  public void deleteNewsById(String newsId) {
    News existedNews = this.getNewsById(newsId);
    existedNews.setDeleted(true);
    newsRepository.save(existedNews);
  }
}
