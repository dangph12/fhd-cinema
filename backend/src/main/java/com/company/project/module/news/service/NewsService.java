package com.company.project.module.news.service;

import com.company.project.common.Status;
import com.company.project.module.news.common.NewsStatusMessage;
import com.company.project.module.news.dto.request.NewsCreationRequest;
import com.company.project.module.news.entity.News;
import com.company.project.module.news.exception.NewsException;
import com.company.project.module.news.repository.NewsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    private final NewsRepository newsRepository;

    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    public News getNewsById(String newsId) {
        return newsRepository.findById(newsId).orElseThrow(() -> new NewsException(Status.FAIL.getValue(), NewsStatusMessage.NOT_EXIST.getMessage()));
    }

    public News createNews(NewsCreationRequest request) {
        News news = News.builder()
                .newsTitle(request.getNewsTitle())
                .newsDescription(request.getNewsDescription())
                .newsCreateAt(request.getNewsCreateAt())
                .build();

        return newsRepository.save(news);
    }

    public News updateNews(String newsId, NewsCreationRequest request) {
        News news = getNewsById(newsId);

        news.setNewsTitle(request.getNewsTitle());
        news.setNewsDescription(request.getNewsDescription());
        news.setNewsCreateAt(request.getNewsCreateAt());

        return newsRepository.save(news);
    }

    public void deleteNews(String newsId) {
        if(!newsRepository.existsByNewsId(newsId)) {
            throw new NewsException(Status.FAIL.getValue(), NewsStatusMessage.NOT_EXIST.getMessage());
        }

        newsRepository.deleteById(newsId);
    }

}
