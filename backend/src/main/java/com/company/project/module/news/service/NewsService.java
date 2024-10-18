package com.company.project.module.news.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.news.common.NewsStatusMessage;
import com.company.project.module.news.dto.request.NewsCreationRequest;
import com.company.project.module.news.entity.News;
import com.company.project.module.news.exception.NewsException;
import com.company.project.module.news.repository.NewsRepository;
import com.company.project.module.newscategories.entity.NewsCategory;
import com.company.project.module.newscategories.service.NewsCategoryService;

import org.springframework.stereotype.Service;

@Service
public class NewsService {

    private final NewsRepository newsRepository;

    private final NewsCategoryService newsCategoryService;

    public NewsService(NewsRepository newsRepository, NewsCategoryService newsCategoryService) {
        this.newsRepository = newsRepository;
        this.newsCategoryService = newsCategoryService;
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

}
