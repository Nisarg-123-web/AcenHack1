package com.flowsense.backend.service;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flowsense.backend.dto.DashboardSummary;
import com.flowsense.backend.entity.Application;
import com.flowsense.backend.repository.ApplicationRepository;

@Service
public class DashboardAnalyticsService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public DashboardSummary getDashboardSummary() {

        List<Application> applications = applicationRepository.findAll();

        DashboardSummary summary = new DashboardSummary();

        if (applications.isEmpty()) {
            summary.setRecommendation("No applications available.");
            return summary;
        }

        double avgIncome = applications.stream()
                .filter(a -> a.getMonthlyIncome() != null)
                .mapToDouble(Application::getMonthlyIncome)
                .average()
                .orElse(0);

        summary.setAverageIncome(avgIncome);

        double avgLoan = applications.stream()
                .filter(a -> a.getLoanAmount() != null)
                .mapToDouble(Application::getLoanAmount)
                .average()
                .orElse(0);

        summary.setAverageLoan(avgLoan);

        double avgProbability = applications.stream()
                .filter(a -> a.getProbability() != null)
                .mapToDouble(Application::getProbability)
                .average()
                .orElse(0);

        summary.setAverageProbability(avgProbability);

        long approved = applications.stream()
                .filter(a -> "Y".equals(a.getPrediction()))
                .count();

        summary.setApprovalRate(
                (approved * 100.0) / applications.size()
        );

        Map<String, Long> employmentCount =
                applications.stream()
                        .collect(Collectors.groupingBy(
                                Application::getEmploymentType,
                                Collectors.counting()));

        String bestEmployment = employmentCount.entrySet()
                .stream()
                .max(Comparator.comparingLong(Map.Entry::getValue))
                .map(Map.Entry::getKey)
                .orElse("N/A");

        summary.setBestEmployment(bestEmployment);

        Map<String, Long> steps =
                applications.stream()
                        .collect(Collectors.groupingBy(
                                Application::getCurrentStep,
                                Collectors.counting()));

        String highestDropStep =
                steps.entrySet()
                        .stream()
                        .min(Comparator.comparingLong(Map.Entry::getValue))
                        .map(Map.Entry::getKey)
                        .orElse("N/A");

        summary.setHighestDropStep(highestDropStep);

        long minUsers = steps.values()
                .stream()
                .min(Long::compareTo)
                .orElse(0L);

        summary.setDropRate(
                (minUsers * 100.0) / applications.size()
        );

        String recommendation;

        if (summary.getDropRate() < 50) {

            recommendation =
                    "Simplify the " +
                    highestDropStep +
                    " step to reduce customer abandonment.";

        } else if (summary.getApprovalRate() < 60) {

            recommendation =
                    "Review eligibility criteria and improve customer onboarding.";

        } else {

            recommendation =
                    "Current journey performs well. Focus on faster approvals.";

        }

        summary.setRecommendation(recommendation);

        return summary;
    }

}