package com.company.project.module.screens.service;

import com.company.project.common.Status;
import com.company.project.module.cinemas.entity.Cinema;
import com.company.project.module.cinemas.repository.CinemaRepository;
import com.company.project.module.screens.common.ScreenStatusMessage;
import com.company.project.module.screens.dto.request.ScreenCreationRequest;
import com.company.project.module.screens.entity.Screen;
import com.company.project.module.screens.exception.ScreenException;
import com.company.project.module.screens.repository.ScreenRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScreenService {

    private final ScreenRepository screenRepository;
    private final CinemaRepository cinemaRepository;

    public ScreenService(ScreenRepository screenRepository, CinemaRepository cinemaRepository) {
        this.screenRepository = screenRepository;
        this.cinemaRepository = cinemaRepository;
    }

    public List<Screen> findAll() {
        return screenRepository.findAll();
    }

    public Screen findScreenById(String screenId) {
        return screenRepository.findById(screenId).orElseThrow(() -> new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.NOT_EXIST.getMessage()));
    }

    public Screen createScreen(ScreenCreationRequest request) {
        if(screenRepository.existsByScreenName(request.getScreenName())) {
            throw new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.SCREEN_EXIST.getMessage());
        }

        Cinema cinema = cinemaRepository.findById(request.getCinemaId())
                .orElseThrow(() -> new ScreenException(Status.FAIL.getValue(), "Cinema ID is invalid"));

        Screen screen = Screen.builder()
                .cinema(cinema)
                .screenName(request.getScreenName())
                .build();

        return screenRepository.save(screen);
    }

    public Screen updateScreen(String screenId, ScreenCreationRequest request) {
        if(!screenRepository.existsByScreenId(screenId)) {
            throw new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.NOT_EXIST.getMessage());
        }

        Cinema cinema = cinemaRepository.findById(request.getCinemaId())
                .orElseThrow(() -> new ScreenException(Status.FAIL.getValue(), "Cinema ID is invalid"));

        Screen existScreen = findScreenById(screenId);

        existScreen.setCinema(cinema);
        existScreen.setScreenName(request.getScreenName());

        return screenRepository.save(existScreen);
    }

    public void deleteScreen(String screenId) {
        if(!screenRepository.existsByScreenId(screenId)) {
            throw new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.NOT_EXIST.getMessage());
        }

        screenRepository.deleteById(screenId);
    }

}
