package com.flowsense.backend.dto;

import lombok.Data;

@Data
public class DashboardSummary {

    private String highestDropStep;

    private double dropRate;

    private String bestEmployment;

    private double approvalRate;

    private double averageIncome;

    private double averageLoan;

    private double averageProbability;

    private String recommendation;

}