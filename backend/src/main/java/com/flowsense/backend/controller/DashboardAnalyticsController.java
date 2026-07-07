package com.flowsense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flowsense.backend.dto.DashboardSummary;
import com.flowsense.backend.service.DashboardAnalyticsService;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardAnalyticsController {

    @Autowired
    private DashboardAnalyticsService dashboardAnalyticsService;

    @GetMapping("/summary")
    public DashboardSummary getSummary() {

        return dashboardAnalyticsService.getDashboardSummary();

    }

}