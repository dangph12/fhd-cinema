package com.company.project.module.staffroles.controller;

import com.company.project.common.ApiResponse;
import com.company.project.common.Status;
import com.company.project.module.staffroles.common.StaffRoleStatusMessage;
import com.company.project.module.staffroles.dto.request.StaffRoleCreationRequest;
import com.company.project.module.staffroles.entity.StaffRole;
import com.company.project.module.staffroles.service.StaffRoleService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staffRoles")
public class StaffRoleController {

    private final StaffRoleService staffRoleService;

    public StaffRoleController(StaffRoleService staffRoleService) {
        this.staffRoleService = staffRoleService;
    }

    @GetMapping
    ResponseEntity<ApiResponse<List<StaffRole>>> getAllStaffRoles() {
        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<List<StaffRole>>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffRoleStatusMessage.GET_SUCCESS.getMessage())
                        .data(staffRoleService.getAllStaffRoles())
                        .build());
    }

    @GetMapping("/{staffRoleId}")
    ResponseEntity<ApiResponse<StaffRole>> getStaffRole(@PathVariable String staffRoleId) {
        StaffRole staffRole = staffRoleService.getStaffRoleByStaffRoleId(staffRoleId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<StaffRole>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffRoleStatusMessage.GET_SUCCESS.getMessage())
                        .data(staffRole)
                        .build());
    }

    @PostMapping
    ResponseEntity<ApiResponse<StaffRole>> createStaffRole(@RequestBody @Valid StaffRoleCreationRequest request) {
        StaffRole staffRole = staffRoleService.createStaffRole(request);

        return ResponseEntity.status(HttpStatus.CREATED.value())
                .body(ApiResponse.<StaffRole>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffRoleStatusMessage.CREATE_SUCCESS.getMessage())
                        .data(staffRole)
                        .build());
    }

    @PutMapping("/{staffRoleId}")
    ResponseEntity<ApiResponse<StaffRole>> updateStaffRole(@PathVariable String staffRoleId, @RequestBody @Valid StaffRoleCreationRequest request) {
        StaffRole staffRole = staffRoleService.updateStaffRole(staffRoleId, request);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<StaffRole>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffRoleStatusMessage.UPDATE_SUCCESS.getMessage())
                        .data(staffRole)
                        .build());
    }

    @DeleteMapping("/{staffRoleId}")
    ResponseEntity<ApiResponse<StaffRole>> deleteStaffRole(@PathVariable String staffRoleId) {
        staffRoleService.deleteStaffRole(staffRoleId);

        return ResponseEntity.status(HttpStatus.OK.value())
                .body(ApiResponse.<StaffRole>builder()
                        .status(Status.SUCCESS.getValue())
                        .message(StaffRoleStatusMessage.DELETE_SUCCESS.getMessage())
                        .build());
    }

}
