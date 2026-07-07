import axios from "axios";

const API = "http://localhost:8080/api";

/* Analytics */
export const getAnalytics = async () => {
    const response = await axios.get(`${API}/analytics`);
    return response.data;
};

/* Dashboard Summary */
export const getDashboardSummary = async () => {
    const response = await axios.get(`${API}/dashboard/summary`);
    return response.data;
};

/* Applications */
export const getApplications = async () => {
    const response = await axios.get(`${API}/applications`);
    return response.data;
};

/* Journey Events */
export const getJourneyEvents = async () => {
    const response = await axios.get(`${API}/events`);
    return response.data;
};

/* ML Metrics */
export const getModelMetrics = async () => {
    const response = await axios.get("http://127.0.0.1:8000/metrics");
    return response.data;
};