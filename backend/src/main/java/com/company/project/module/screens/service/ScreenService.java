package com.company.project.module.screens.service;

import com.company.project.common.Status;
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

    public ScreenService(ScreenRepository screenRepository) {
        this.screenRepository = screenRepository;
    }

    public List<Screen> findAll() {
        return screenRepository.findAll();
    }

    public Screen findScreenById(String screenId) {
        return screenRepository.findById(screenId).orElseThrow(() -> new ScreenException(Status.FAIL.getValue(), ScreenStatusMessage.NOT_EXIST.getMessage()));
    }



}
