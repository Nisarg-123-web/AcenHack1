package com.flowsense.backend.ml;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MLPredictionService {

    @Autowired
    private RestTemplate restTemplate;

    private static final String ML_API =
            "http://127.0.0.1:8000/predict";

    public PredictionResponse predict(
            PredictionRequest request
    ) {

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<PredictionRequest> entity =
                new HttpEntity<>(request, headers);

        ResponseEntity<PredictionResponse> response =
                restTemplate.postForEntity(
                        ML_API,
                        entity,
                        PredictionResponse.class
                );

        return response.getBody();

    }

}