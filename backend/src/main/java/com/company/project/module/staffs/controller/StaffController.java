package com.company.project.module.staffs.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.staffs.common.StaffStatusMessage;
import com.company.project.module.staffs.dto.request.StaffCreationRequest;
import com.company.project.module.staffs.entity.Staff;
import com.company.project.module.staffs.service.StaffService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staffs")
public class StaffController {

    private final StaffService staffService;

    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<Staff>>> getAllStaff() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<Staff>>builder()
                        .status(Status.FAIL.getValue())
                        .message(StaffStatusMessage.GET_SUCCESS.getMessage())
                        .data(staffService.findAllStaffs())
                        .build());
    }

    @GetMapping("/{staffId}")
    ResponseEntity<ApiResponse<Staff>> getStaffById(@PathVariable(name = "staffId") String staffId) {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Staff>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffStatusMessage.GET_SUCCESS.getMessage())
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<Staff>> addStaff(@RequestBody @Valid StaffCreationRequest request) {
        Staff staff = staffService.createStaff(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<Staff>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(staff)
                        .build());
    }

    @PutMapping("/{staffId}")
    ResponseEntity<ApiResponse<Staff>> updateStaff(@PathVariable(name = "staffId") String staffId, @RequestBody @Valid StaffCreationRequest request) {
        Staff staff = staffService.updateStaff(staffId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Staff>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(staff)
                        .build());
    }

    @DeleteMapping("/{staffId}")
    ResponseEntity<ApiResponse<Staff>> deleteStaff(@PathVariable(name = "staffId") String staffId) {
        staffService.deleteStaff(staffId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<Staff>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
