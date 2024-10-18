package com.company.project.module.newscategories.service;

import java.util.List;

import com.company.project.common.Status;
import com.company.project.module.newscategories.common.NewsCategoryStatusMessage;
import com.company.project.module.newscategories.dto.request.NewsCategoryCreationRequest;
import com.company.project.module.newscategories.entity.NewsCategory;
import com.company.project.module.newscategories.exception.NewsCategoryException;
import com.company.project.module.newscategories.repository.NewsCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class NewsCategoryService {
  
  @Autowired
  private NewsCategoryRepository newsCategoryRepository;

  public List<NewsCategory> getAllNewsCategory() {
    return newsCategoryRepository.findAll();
  }
  
  public NewsCategory getNewsCategoryById(String newsCategoryId) {
    return newsCategoryRepository.findById(newsCategoryId)
    .orElseThrow(() -> new NewsCategoryException(
      Status.FAIL.getValue(), 
      NewsCategoryStatusMessage.NOT_EXIST.getMessage()));
  }

  public NewsCategory createNewsCategory(NewsCategoryCreationRequest request) {

    if(newsCategoryRepository.existsByNewsCategoryName(request.getNewsCategoryName())) {
        throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.EXIST_NEWSCATEGORY.getMessage());
    }

    NewsCategory newsCategory = NewsCategory.builder()
      .newsCategoryName(request.getNewsCategoryName())
      .build();

    return newsCategoryRepository.save(newsCategory);
  }

  public NewsCategory updateNewsCategory(String newsCategoryId, NewsCategoryCreationRequest request) {
    if (!newsCategoryRepository.existsById(newsCategoryId)) {
      throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.NOT_EXIST.getMessage());
    }

    NewsCategory existedNewsCategory = this.getNewsCategoryById(newsCategoryId);

    if (!existedNewsCategory.getNewsCategoryName().equals(request.getNewsCategoryName()) 
        && newsCategoryRepository.existsByNewsCategoryName(request.getNewsCategoryName())) {
        throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.EXIST_NEWSCATEGORY.getMessage());
    }

    existedNewsCategory.setNewsCategoryName(request.getNewsCategoryName());

    if (!existedNewsCategory.getNewsCategoryName().equals(request.getNewsCategoryName())) {
      existedNewsCategory.setNewsCategoryName(request.getNewsCategoryName());
    }

    return newsCategoryRepository.save(existedNewsCategory);
  }

  @Transactional
  public void deleteNewsCategoryById(String newsCategoryId) {
    if (!newsCategoryRepository.existsById(newsCategoryId)) {
      throw new NewsCategoryException(Status.FAIL.getValue(), NewsCategoryStatusMessage.NOT_EXIST.getMessage());
    }

    newsCategoryRepository.deleteById(newsCategoryId);
  }

}
