package com.flowsense.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flowsense.backend.dto.JourneyAnalyticsResponse;
import com.flowsense.backend.entity.Application;
import com.flowsense.backend.repository.ApplicationRepository;

@Service
public class JourneyAnalyticsService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public JourneyAnalyticsResponse getAnalytics() {

        List<Application> applications =
                applicationRepository.findAll();

        JourneyAnalyticsResponse response =
                new JourneyAnalyticsResponse();

        response.setTotalApplications(applications.size());

        long submitted = applications.stream()
                .filter(a -> a.getPrediction() != null)
                .count();

        response.setSubmittedApplications(submitted);

        response.setDroppedApplications(
                applications.size() - submitted);

        if (applications.size() > 0) {

            response.setConversionRate(
                    (submitted * 100.0) / applications.size());

        }

        response.setPersonalStep(
                applications.stream()
                        .filter(a -> a.getCurrentStep() != null)
                        .count());

        response.setProfileStep(
                applications.stream()
                        .filter(a ->
                                "PROFILE_DETAILS".equals(a.getCurrentStep()))
                        .count());

        response.setEmploymentStep(
                applications.stream()
                        .filter(a ->
                                "EMPLOYMENT_DETAILS".equals(a.getCurrentStep()))
                        .count());

        response.setLoanStep(
                applications.stream()
                        .filter(a ->
                                "LOAN_DETAILS".equals(a.getCurrentStep()))
                        .count());

        return response;
    }

}