package com.flowsense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flowsense.backend.dto.JourneyAnalyticsResponse;
import com.flowsense.backend.service.JourneyAnalyticsService;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "http://localhost:5173")
public class JourneyAnalyticsController {

    @Autowired
    private JourneyAnalyticsService journeyAnalyticsService;

    @GetMapping
    public JourneyAnalyticsResponse getAnalytics() {
        return journeyAnalyticsService.getAnalytics();
    }
}