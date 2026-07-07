package com.flowsense.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flowsense.backend.entity.JourneyEvent;
import com.flowsense.backend.repository.JourneyEventRepository;

@Service
public class JourneyEventService {

    @Autowired
    private JourneyEventRepository repository;

    public JourneyEvent saveEvent(JourneyEvent event) {

        event.setEventTime(LocalDateTime.now());

        return repository.save(event);

    }

    public List<JourneyEvent> getAllEvents() {

        return repository.findAll();

    }

}