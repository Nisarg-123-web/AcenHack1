# 🚀 FlowSense AI
### AI-Powered Loan Application Analytics & Customer Journey Intelligence Platform

---

## 📖 Overview

FlowSense AI is an end-to-end intelligent loan application platform that combines:

- 📄 Multi-step loan application
- 🤖 Machine Learning based loan approval prediction
- 📊 Business Intelligence Dashboard
- 📈 Customer Journey Analytics
- 💾 Spring Boot + MySQL Backend
- 🧠 FastAPI ML Microservice
- ⚛️ React Frontend

The system allows customers to submit loan applications while providing business users with powerful analytics to monitor customer behavior, conversion rates, approval statistics, and business insights.

---

# 🎯 Problem Statement

Traditional loan application systems collect customer information but provide very limited insights into:

- Customer drop-off points
- Application conversion rate
- Approval trends
- Customer segmentation
- Portfolio risk
- ML-based approval prediction

FlowSense AI solves these challenges by integrating Machine Learning with Customer Journey Analytics into one intelligent platform.

---

# ✨ Features

## 👨 Customer Side

- Multi-step Loan Application
- Personal Details
- Employment Details
- Loan Details
- Review & Submit
- ML Loan Prediction
- Probability Score

---

## 👨‍💼 Admin Dashboard

- Total Applications
- Submitted Applications
- Dropped Applications
- Conversion Rate
- Customer Journey Funnel
- Application Trend Analysis
- Prediction Distribution
- Employment Distribution
- Portfolio Risk Analysis
- Income Statistics
- Loan Statistics
- Approval Gauge
- Executive Summary
- AI Recommendations
- Recent Applications
- Dashboard Filters

---

# 🧠 Machine Learning

The project uses a Scikit-Learn classification model trained on a Loan Approval Dataset.

The ML service predicts:

- Loan Approval
- Approval Probability

The prediction is stored inside the application database and displayed on the analytics dashboard.

---

# 🏗 System Architecture

```
                React Frontend
                      │
        ┌─────────────┴──────────────┐
        │                            │
        ▼                            ▼
Spring Boot Backend          FastAPI ML Service
        │                            │
        │                            │
        └─────────────┬──────────────┘
                      ▼
                   MySQL
```

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Recharts

---

## Backend

- Spring Boot
- Spring Web
- Spring Data JPA
- MySQL
- Maven

---

## Machine Learning

- Python
- FastAPI
- Scikit-Learn
- Pandas
- Joblib

---

# 📂 Project Structure

```
FlowSenseAI/

│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   └── config/
│   │
│   └── pom.xml
│
├── ml-service/
│   ├── model.pkl
│   ├── metrics.json
│   ├── main.py
│   └── requirements.txt
│
└── README.md
```

---

# 🗄 Database

Main Tables

## Applications

Stores:

- Personal Information
- Employment Information
- Loan Details
- Prediction
- Probability
- Status

---

## Journey Events

Stores customer navigation events including:

- Step Number
- Step Name
- Event Name
- Timestamp

Used for Journey Funnel Analytics.

---

# ⚙ Installation Guide

## 1 Clone Repository

```bash
git clone https://github.com/yourusername/FlowSenseAI.git
```

---

# 2 Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 3 Backend

Open using IntelliJ or VS Code

Configure MySQL in

```
application.properties
```

Run

```
FlowSenseApplication.java
```

Backend runs on

```
http://localhost:8080
```

---

# 4 ML Service

Navigate

```bash
cd ml-service
```

Install

```bash
pip install -r requirements.txt
```

Run

```bash
uvicorn main:app --reload
```

Runs on

```
http://127.0.0.1:8000
```

---

# 🔗 API Endpoints

## Applications

| Method | Endpoint |
|----------|-----------------------------|
| GET | /api/applications |
| POST | /api/applications |

---

## Journey Events

| Method | Endpoint |
|----------|----------------------|
| GET | /api/events |
| POST | /api/events |

---

## Dashboard

| Method | Endpoint |
|----------|-----------------------------|
| GET | /api/analytics |
| GET | /api/dashboard/summary |

---

## Machine Learning

| Method | Endpoint |
|----------|----------------|
| POST | /predict |
| GET | /metrics |

---

# 📊 Dashboard Components

The dashboard contains:

- KPI Cards
- Customer Journey Funnel
- Application Trend Chart
- Prediction Distribution
- Employment Distribution
- Portfolio Risk
- Income Statistics
- Loan Statistics
- Approval Gauge
- Executive Summary
- Business Recommendation
- Recent Applications

---

# 🔄 Workflow

```
Customer

↓

Fill Personal Details

↓

Employment Details

↓

Loan Details

↓

Review

↓

Submit Application

↓

Spring Boot Backend

↓

FastAPI ML Prediction

↓

Store Prediction

↓

MySQL

↓

Dashboard Analytics
```

---

# 🎯 Business Benefits

- Faster loan screening
- AI-assisted decision support
- Customer behavior analysis
- Drop-off tracking
- Conversion monitoring
- Executive dashboard
- Portfolio insights

---

# 🚀 Future Enhancements

- Authentication & Authorization
- Email Notifications
- Save & Resume Applications
- Export PDF / Excel Reports
- Cloud Deployment
- Real-time Analytics
- Role-based Dashboard
- Explainable AI (SHAP/LIME)
- Advanced Risk Scoring

---

# 👨‍💻 Developed By

**Nisarg Shah**

B.Tech Information Technology

Dwarkadas J Sanghvi College of Engineering

Mumbai, India

---

# 📜 License

This project is developed for educational and demonstration purposes.

---

# ⭐ Thank You

If you found this project helpful, consider giving it a ⭐ on GitHub.