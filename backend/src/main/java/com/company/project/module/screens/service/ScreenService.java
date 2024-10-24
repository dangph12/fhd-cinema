package com.company.project.module.screens.service;

import java.util.List;
import java.util.stream.Collectors;

import com.company.project.common.ApiPagination;
import com.company.project.common.Status;
import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.cinemas.service.CinemaService;
import com.company.project.module.screens.common.ScreenStatusMessage;
import com.company.project.module.screens.dto.request.ScreenCreationRequest;
import com.company.project.module.screens.dto.response.ScreenDto;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.exception.ScreenException;
import com.company.project.module.screens.repository.ScreenRepository;
import com.company.project.utils.Utils;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ScreenService {

  private final ScreenRepository screenRepository;
  private final CinemaService cinemaService;
  private final Utils utils;
  private final ModelMapper modelMapper;

  public ScreenService(ScreenRepository screenRepository, CinemaService cinemaService, Utils utils,
      ModelMapper modelMapper) {
    this.screenRepository = screenRepository;
    this.cinemaService = cinemaService;
    this.utils = utils;
    this.modelMapper = modelMapper;
  }

  private ScreenDto convertToScreenDto(Screen screen) {
    return modelMapper.map(screen, ScreenDto.class);
  }

  public List<ScreenDto> getAllScreens() {
    List<Screen> screenList = screenRepository.findAllByIsDeletedFalse();
    return screenList.stream()
        .map(this::convertToScreenDto)
        .collect(Collectors.toList());
  }

  public Screen getScreenById(String screenId) {
    Screen screen = screenRepository.findByScreenIdAndIsDeletedFalse(screenId);
    if (screen == null) {
      throw new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.NOT_EXIST.getMessage());
    }
    return screen;
  }

  public ScreenDto getScreenDtoById(String screenId) {
    Screen screen = this.getScreenById(screenId);
    return this.convertToScreenDto(screen);
  }

  public ApiPagination<ScreenDto> filterScreens(String screenName, int page, int pageSize, List<String> cinemaNames,
      String sortBy, String sortDirection) {
    if (page < 1 || pageSize < 1) {
      throw new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.LESS_THAN_ZERO.getMessage());
    }

    List<String> screenFieldNames = utils.getEntityFields(Screen.class);
    if (!screenFieldNames.contains(sortBy)) {
      throw new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.UNKNOWN_ATTRIBUTE.getMessage());
    }

    Sort.Direction direction = Sort.Direction.fromString(sortDirection);
    Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by(direction, sortBy));

    Page<Screen> screenPages = screenRepository.searchScreens(screenName, cinemaNames, pageable);
    long count = screenRepository.countScreens(screenName, cinemaNames);

    List<ScreenDto> screenDtos = screenPages.getContent().stream()
        .map(this::convertToScreenDto)
        .collect(Collectors.toList());

    return ApiPagination.<ScreenDto>builder()
        .result(screenDtos)
        .count(count)
        .build();
  }

  public ScreenDto createScreen(ScreenCreationRequest request) {
    Cinema cinema = cinemaService.getCinemaById(request.getCinemaId());

    Screen screen = Screen.builder()
        .screenName(request.getScreenName())
        .cinema(cinema)
        .build();

    screenRepository.save(screen);
    return this.convertToScreenDto(screen);
  }

  public ScreenDto updateScreen(String screenId, ScreenCreationRequest request) {
    Screen existedScreen = this.getScreenById(screenId);

    Cinema cinema = cinemaService.getCinemaById(request.getCinemaId());

    existedScreen.setScreenName(request.getScreenName());
    existedScreen.setCinema(cinema);


    screenRepository.save(existedScreen);
    return this.convertToScreenDto(existedScreen);
  }

  public void deleteScreenById(String screenId) {
    Screen existedScreen = this.getScreenById(screenId);

    existedScreen.getSeats().forEach(seat -> {
      seat.setDeleted(true);
    });

    existedScreen.getShowtimes().forEach(showtime -> {
      showtime.setDeleted(true);
    });
    existedScreen.setDeleted(true);
    screenRepository.save(existedScreen);
  }
}
