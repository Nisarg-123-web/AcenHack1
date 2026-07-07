package com.flowsense.backend.ml;

import lombok.Data;

@Data
public class PredictionResponse {

    private String prediction;
    private Double probability;

}