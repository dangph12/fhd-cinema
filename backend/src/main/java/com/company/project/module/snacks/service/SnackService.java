package com.company.project.module.snacks.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.bookings.repository.BookingRepository;
import com.company.project.module.snacks.common.SnackStatusMessage;
import com.company.project.module.snacks.dto.request.SnackCreationRequest;
import com.company.project.module.snacks.dto.response.SnackDto;
import com.company.project.module.snacks.entity.Snack;
import com.company.project.module.snacks.exception.SnackException;
import com.company.project.module.snacks.repository.SnackRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class SnackService {

    private final SnackRepository snackRepository;
    private final BookingRepository bookingRepository;
    private final Utils utils;
    private final ModelMapper modelMapper;

    public SnackService(SnackRepository snackRepository, BookingRepository bookingRepository, Utils utils, ModelMapper modelMapper) {
        this.snackRepository = snackRepository;
        this.bookingRepository = bookingRepository;
        this.utils = utils;
        this.modelMapper = modelMapper;
    }

    private SnackDto convertToSnackDto(Snack snack) {
        return modelMapper.map(snack, SnackDto.class);
    }

    public List<SnackDto> getAllSnacks() {
        List<Snack> snacks = snackRepository.findAllByIsDeletedFalse();
        return snacks.stream()
                     .map(this::convertToSnackDto)
                     .collect(Collectors.toList());
    }

    public Snack getSnackById(String snackId) {
        Snack snack = snackRepository.findBySnackIdAndIsDeletedFalse(snackId);
        if (snack == null) {
            throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.NOT_EXIST.getMessage());
        }
        return snack;
    }

    public SnackDto getSnackDtoById(String snackId) {
        Snack snack = this.getSnackById(snackId);
        return this.convertToSnackDto(snack);
    }

    public ApiPagination<SnackDto> filterSnacks(String snackName, int page, int pageSize,
                                                String sortBy, String sortDirection) {
        if (page < 1 || pageSize < 1) {
            throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.LESS_THAN_ZERO.getMessage());
        }

        List<String> snackFieldNames = utils.getEntityFields(Snack.class);
        if (!snackFieldNames.contains(sortBy)) {
            throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
        }

        Sort.Direction direction = Sort.Direction.fromString(sortDirection);
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

        Page<Snack> snackPages = snackRepository.findBySnackNameContainingIgnoreCaseAndIsDeletedFalse(snackName, pageable);
        long count = snackRepository.countBySnackNameContainingIgnoreCaseAndIsDeletedFalse(snackName);

        List<SnackDto> snackDtos = snackPages.getContent().stream()
                                             .map(this::convertToSnackDto)
                                             .collect(Collectors.toList());

        return ApiPagination.<SnackDto>builder()
                            .result(snackDtos)
                            .count(count)
                            .build();
    }

    public SnackDto createSnack(SnackCreationRequest request) {
        if (snackRepository.existsBySnackNameAndIsDeletedFalse(request.getSnackName())) {
            throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.EXIST_SNACK.getMessage());
        }

        Snack snack = Snack.builder()
                           .snackName(request.getSnackName())
                           .snackPrice(request.getSnackPrice())
                           .build();

        snackRepository.save(snack);
        return this.convertToSnackDto(snack);
    }

    public SnackDto updateSnack(String snackId, SnackCreationRequest request) {
        Snack existedSnack = this.getSnackById(snackId);

        if (!existedSnack.getSnackName().equals(request.getSnackName()) &&
            snackRepository.existsBySnackNameAndIsDeletedFalse(request.getSnackName())) {
            throw new SnackException(Status.FAIL.getValue(), SnackStatusMessage.EXIST_SNACK.getMessage());
        }

        existedSnack.setSnackPrice(request.getSnackPrice());

        if (!existedSnack.getSnackName().equals(request.getSnackName())) {
            existedSnack.setSnackName(request.getSnackName());
        }

        snackRepository.save(existedSnack);
        return this.convertToSnackDto(existedSnack);
    }

    public void deleteSnackById(String snackId) {
        Snack existedSnack = this.getSnackById(snackId);

        existedSnack.setDeleted(true);
        snackRepository.save(existedSnack);
    }
}
