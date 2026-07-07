package com.flowsense.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flowsense.backend.entity.Application;
import com.flowsense.backend.ml.MLPredictionService;
import com.flowsense.backend.ml.PredictionRequest;
import com.flowsense.backend.ml.PredictionResponse;
import com.flowsense.backend.repository.ApplicationRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private MLPredictionService mlPredictionService;

    public Application saveApplication(Application application) {

        application.setCreatedAt(LocalDateTime.now());

        if (application.getStatus() == null) {
            application.setStatus("PENDING");
        }

        if (application.getCurrentStep() == null) {
            application.setCurrentStep("PERSONAL_DETAILS");
        }

        PredictionRequest request = new PredictionRequest();

        request.setGender(application.getGender());
        request.setMarried(application.getMarried());
        request.setDependents("0");
        request.setEducation(application.getEducation());

        request.setSelf_Employed(application.getEmploymentType());

        request.setApplicantIncome(application.getMonthlyIncome());

        request.setCoapplicantIncome(0.0);

        request.setLoanAmount(application.getLoanAmount());

        request.setLoan_Amount_Term(
                application.getLoanTenure() == null
                        ? 360.0
                        : application.getLoanTenure().doubleValue());

        request.setCredit_History(
                application.getCreditHistory().equals("1")
                        ? 1.0
                        : 0.0);

        request.setProperty_Area("Urban");

        try {

            PredictionResponse prediction =
                    mlPredictionService.predict(request);

            application.setPrediction(
                    prediction.getPrediction());

            application.setProbability(
                    prediction.getProbability());

        } catch (Exception e) {

            application.setPrediction("UNKNOWN");

            application.setProbability(0.0);

            System.out.println(e.getMessage());

        }

        return applicationRepository.save(application);

    }

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElse(null);
    }

}