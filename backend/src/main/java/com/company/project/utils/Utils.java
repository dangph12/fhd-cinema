package com.company.project.utils;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

@Component
public class Utils {

  public List<String> getEntityFields(Class<?> clazz) {
    return Arrays.stream(clazz.getDeclaredFields())
        .map(Field::getName) 
        .collect(Collectors.toList());
  }

}
