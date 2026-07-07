package com.flowsense.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "applications")
@Data
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Personal Details
    private String fullName;
    private String email;
    private String phone;

    // ML Fields
    private String gender;
    private String married;
    private String education;
    private String creditHistory;

    // Employment
    private String employmentType;
    private Double monthlyIncome;

    // Loan
    private Double loanAmount;
    private String loanPurpose;
    private Integer loanTenure;

    // Dashboard
    private String status = "PENDING";

    // Journey Tracking
    private String currentStep;

    private LocalDateTime createdAt;
    private String prediction;

private Double probability;

}