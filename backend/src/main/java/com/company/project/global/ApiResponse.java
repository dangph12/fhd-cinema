<<<<<<<< HEAD:backend/src/main/java/com/company/project/global/ApiResponse.java
package com.company.project.global;
========
package com.company.project.common;
>>>>>>>> 00327195c162605ea45d8195fa23dc62c80a54ab:backend/src/main/java/com/company/project/common/ApiResponse.java

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
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
