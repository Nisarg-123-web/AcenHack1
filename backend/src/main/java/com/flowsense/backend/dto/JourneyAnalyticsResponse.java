package com.flowsense.backend.dto;

import lombok.Data;

@Data
public class JourneyAnalyticsResponse {

    private long totalApplications;

    private long submittedApplications;

    private long droppedApplications;

    private double conversionRate;

    private long personalStep;

    private long profileStep;

    private long employmentStep;

    private long loanStep;

}