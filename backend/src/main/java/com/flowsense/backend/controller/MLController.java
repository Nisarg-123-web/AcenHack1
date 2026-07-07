package com.flowsense.backend.controller;

import com.flowsense.backend.ml.MLPredictionService;
import com.flowsense.backend.ml.PredictionRequest;
import com.flowsense.backend.ml.PredictionResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ml")
@CrossOrigin(origins = "http://localhost:5173")
public class MLController {

    @Autowired
    private MLPredictionService mlPredictionService;

    @PostMapping("/predict")
    public PredictionResponse predict(
            @RequestBody PredictionRequest request) {

        return mlPredictionService.predict(request);

    }

}