<<<<<<<< HEAD:backend/src/main/java/com/company/project/common/ApiResponse.java
package com.company.project.common;
========
package com.company.project.global;
>>>>>>>> 0a05ff7188386f3b9dd9e60a22a3ac7b5c801675:backend/src/main/java/com/company/project/global/ApiResponse.java

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {
    String status;
    String message;
    T data;
}
