package com.company.project.module.newscategories.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.newscategories.common.NewsCategoryStatusMessage;
import com.company.project.module.newscategories.dto.request.NewsCategoryCreationRequest;
import com.company.project.module.newscategories.dto.response.NewsCategoryDto;
import com.company.project.module.newscategories.entity.NewsCategory;
import com.company.project.module.newscategories.exception.NewsCategoryException;
import com.company.project.module.newscategories.repository.NewsCategoryRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class NewsCategoryService {

    private final NewsCategoryRepository newsCategoryRepository;
    private final Utils utils;
    private final ModelMapper modelMapper;

    public NewsCategoryService(NewsCategoryRepository newsCategoryRepository, Utils utils, ModelMapper modelMapper) {
        this.newsCategoryRepository = newsCategoryRepository;
        this.utils = utils;
        this.modelMapper = modelMapper;
    }

    private NewsCategoryDto convertToNewsCategoryDto(NewsCategory newsCategory) {
        return modelMapper.map(newsCategory, NewsCategoryDto.class);
    }

    public List<NewsCategoryDto> getAllNewsCategories() {
        List<NewsCategory> newsCategories = newsCategoryRepository.findAllByIsDeletedFalse();
        return newsCategories.stream()
                             .map(this::convertToNewsCategoryDto)
                             .collect(Collectors.toList());
    }

    public NewsCategory getNewsCategoryById(String newsCategoryId) {
        NewsCategory newsCategory = newsCategoryRepository.findByNewsCategoryIdAndIsDeletedFalse(newsCategoryId);
        if (newsCategory == null) {
            throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.NOT_EXIST.getMessage());
        }
        return newsCategory;
    }

    public NewsCategoryDto getNewsCategoryDtoById(String newsCategoryId) {
        NewsCategory newsCategory = this.getNewsCategoryById(newsCategoryId);
        return this.convertToNewsCategoryDto(newsCategory);
    }

    public ApiPagination<NewsCategoryDto> filterNewsCategories(String newsCategoryName, int page, int pageSize,
                                                               String sortBy, String sortDirection) {
        if (page < 1 || pageSize < 1) {
            throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.LESS_THAN_ZERO.getMessage());
        }

        List<String> newsCategoryFieldNames = utils.getEntityFields(NewsCategory.class);
        if (!newsCategoryFieldNames.contains(sortBy)) {
            throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
        }

        Sort.Direction direction = Sort.Direction.fromString(sortDirection);
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

        Page<NewsCategory> newsCategoryPages = newsCategoryRepository.findByNewsCategoryNameContainingIgnoreCaseAndIsDeletedFalse(newsCategoryName, pageable);
        long count = newsCategoryRepository.countByNewsCategoryNameContainingIgnoreCaseAndIsDeletedFalse(newsCategoryName);

        List<NewsCategoryDto> newsCategoryDtos = newsCategoryPages.getContent().stream()
                                                                  .map(this::convertToNewsCategoryDto)
                                                                  .collect(Collectors.toList());

        return ApiPagination.<NewsCategoryDto>builder()
                            .result(newsCategoryDtos)
                            .count(count)
                            .build();
    }

    public NewsCategoryDto createNewsCategory(NewsCategoryCreationRequest request) {
        if (newsCategoryRepository.existsByNewsCategoryNameAndIsDeletedFalse(request.getNewsCategoryName())) {
            throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.EXIST_NEWSCATEGORY.getMessage());
        }

        NewsCategory newsCategory = NewsCategory.builder()
                                                .newsCategoryName(request.getNewsCategoryName())
                                                .build();

        newsCategoryRepository.save(newsCategory);
        return this.convertToNewsCategoryDto(newsCategory);
    }

    public NewsCategoryDto updateNewsCategory(String newsCategoryId, NewsCategoryCreationRequest request) {
        NewsCategory existedNewsCategory = this.getNewsCategoryById(newsCategoryId);

        if (!existedNewsCategory.getNewsCategoryName().equals(request.getNewsCategoryName()) &&
            newsCategoryRepository.existsByNewsCategoryNameAndIsDeletedFalse(request.getNewsCategoryName())) {
            throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.EXIST_NEWSCATEGORY.getMessage());
        }

        existedNewsCategory.setNewsCategoryName(request.getNewsCategoryName());

        newsCategoryRepository.save(existedNewsCategory);
        return this.convertToNewsCategoryDto(existedNewsCategory);
    }

    public void deleteNewsCategoryById(String newsCategoryId) {
        NewsCategory existedNewsCategory = this.getNewsCategoryById(newsCategoryId);

        existedNewsCategory.getNews().forEach(news -> {
            news.setDeleted(true);  
        });

        existedNewsCategory.setDeleted(true);  
        newsCategoryRepository.save(existedNewsCategory);  
    }
}
