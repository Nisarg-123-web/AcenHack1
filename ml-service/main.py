from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
import json

# ----------------------------
# FastAPI App
# ----------------------------

app = FastAPI(title="FlowSense AI ML Service")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Load ML Model & Metrics
# ----------------------------

model = joblib.load("model.pkl")

with open("metrics.json", "r") as f:
    metrics = json.load(f)

# ----------------------------
# Request Model
# ----------------------------

class LoanRequest(BaseModel):
    Gender: str
    Married: str
    Dependents: str
    Education: str
    Self_Employed: str
    ApplicantIncome: float
    CoapplicantIncome: float
    LoanAmount: float
    Loan_Amount_Term: float
    Credit_History: float
    Property_Area: str

# ----------------------------
# Routes
# ----------------------------

@app.get("/")
def home():
    return {
        "message": "FlowSense AI ML Service Running"
    }


@app.get("/metrics")
def get_metrics():
    return metrics


@app.post("/predict")
def predict(data: LoanRequest):

    df = pd.DataFrame([data.model_dump()])

    prediction = model.predict(df)[0]

    probability = model.predict_proba(df).max()

    return {
        "prediction": prediction,
        "probability": round(float(probability) * 100, 2)
    }