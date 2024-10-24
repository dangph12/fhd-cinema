package com.company.project.module.newscategories.controller;

import java.util.List;

import jakarta.validation.Valid;

import com.company.project.common.ApiPagination;
import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.newscategories.common.NewsCategoryStatusMessage;
import com.company.project.module.newscategories.dto.request.NewsCategoryCreationRequest;
import com.company.project.module.newscategories.dto.response.NewsCategoryDto;
import com.company.project.module.newscategories.service.NewsCategoryService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/newscategories")
public class NewsCategoryController {

    private final NewsCategoryService newsCategoryService;

    public NewsCategoryController(NewsCategoryService newsCategoryService) {
        this.newsCategoryService = newsCategoryService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<NewsCategoryDto>>> getAllNewsCategories() {
        List<NewsCategoryDto> newsCategoryDtos = newsCategoryService.getAllNewsCategories();
        return ResponseEntity.status(HttpStatus.OK.value())
            .body(ApiResponse.<List<NewsCategoryDto>>builder()
                .status(Status.SUCCESS.getValue())
                .message(NewsCategoryStatusMessage.GET_SUCCESS.getMessage())
                .data(newsCategoryDtos)
                .build());
    }

    @GetMapping("/{newsCategoryId}")
    ResponseEntity<ApiResponse<NewsCategoryDto>> getNewsCategoryById(@PathVariable(name = "newsCategoryId") String newsCategoryId) {
        NewsCategoryDto newsCategoryDto = newsCategoryService.getNewsCategoryDtoById(newsCategoryId);

        return ResponseEntity.status(HttpStatus.OK.value())
            .body(ApiResponse.<NewsCategoryDto>builder()
                .status(Status.SUCCESS.getValue())
                .message(NewsCategoryStatusMessage.GET_SUCCESS.getMessage())
                .data(newsCategoryDto)
                .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<NewsCategoryDto>> addNewsCategory(
        @RequestBody @Valid NewsCategoryCreationRequest request) {
        NewsCategoryDto newsCategoryDto = newsCategoryService.createNewsCategory(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
            .body(ApiResponse.<NewsCategoryDto>builder()
                .status(Status.SUCCESS.getValue())
                .message(NewsCategoryStatusMessage.CREATE_SUCCESS.getMessage())
                .data(newsCategoryDto)
                .build());
    }

    @PutMapping("/{newsCategoryId}")
    ResponseEntity<ApiResponse<NewsCategoryDto>> updateNewsCategory(
        @PathVariable(name = "newsCategoryId") String newsCategoryId,
        @Valid @RequestBody NewsCategoryCreationRequest request) {
        NewsCategoryDto newsCategoryDto = newsCategoryService.updateNewsCategory(newsCategoryId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
            .body(ApiResponse.<NewsCategoryDto>builder()
                .status(Status.SUCCESS.getValue())
                .message(NewsCategoryStatusMessage.UPDATE_SUCCESS.getMessage())
                .data(newsCategoryDto)
                .build());
    }

    @DeleteMapping("/{newsCategoryId}")
    ResponseEntity<ApiResponse<Void>> deleteNewsCategory(
        @PathVariable(name = "newsCategoryId") String newsCategoryId) {
        newsCategoryService.deleteNewsCategoryById(newsCategoryId);

        return ResponseEntity.status(HttpStatus.OK.value())
            .body(ApiResponse.<Void>builder()
                .status(Status.SUCCESS.getValue())
                .message(NewsCategoryStatusMessage.DELETE_SUCCESS.getMessage())
                .build());
    }

    @GetMapping(params = "search")
    ResponseEntity<ApiResponse<ApiPagination<NewsCategoryDto>>> filterNewsCategories(
        @RequestParam(value = "search") String search,
        @RequestParam(value = "page", defaultValue = "1") int page,
        @RequestParam(value = "sortBy", defaultValue = "newsCategoryName") String sortBy, 
        @RequestParam(value = "sortDirection", defaultValue = "ASC") String sortDirection,
        @RequestParam(value = "pageSize", defaultValue = "2") int pageSize) {
        ApiPagination<NewsCategoryDto> newsCategoryPagination = newsCategoryService.filterNewsCategories(search, page, pageSize, sortBy, sortDirection);

        return ResponseEntity.ok().body(ApiResponse.<ApiPagination<NewsCategoryDto>>builder()
            .status(Status.SUCCESS.getValue())
            .message(NewsCategoryStatusMessage.GET_SUCCESS.getMessage())
            .data(newsCategoryPagination)
            .build());
    }
}
