package com.flowsense.backend.ml;

import lombok.Data;

@Data
public class PredictionRequest {

    private String Gender;
    private String Married;
    private String Dependents;
    private String Education;
    private String Self_Employed;

    private Double ApplicantIncome;
    private Double CoapplicantIncome;
    private Double LoanAmount;
    private Double Loan_Amount_Term;
    private Double Credit_History;

    private String Property_Area;

}