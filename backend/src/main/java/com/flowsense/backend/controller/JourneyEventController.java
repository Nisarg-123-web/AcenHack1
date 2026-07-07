package com.flowsense.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flowsense.backend.entity.JourneyEvent;
import com.flowsense.backend.service.JourneyEventService;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:5173")
public class JourneyEventController {

    @Autowired
    private JourneyEventService service;

    @PostMapping
    public JourneyEvent saveEvent(@RequestBody JourneyEvent event) {

        return service.saveEvent(event);

    }

    @GetMapping
    public List<JourneyEvent> getEvents() {

        return service.getAllEvents();

    }

}