package com.company.project.module.newscategories.common;

import lombok.Getter;

@Getter
public enum NewsCategoryStatusMessage {

  EMPTY_NAME("The name of news category must not be empty"),
  NOT_EXIST("The news category does not exist"),
  EXIST_NEWSCATEGORY("The name of news category have been existed"),
  GET_SUCCESS("Get NewsCategory successfully"),
  CREATE_SUCCESS("The news category has been created successfully"),
  DELETE_SUCCESS("The news category deleted successfully"),
  UPDATE_SUCCESS("The news category updated successfully");

  private final String message;

  NewsCategoryStatusMessage(String message) {
    this.message = message;
  }

}
