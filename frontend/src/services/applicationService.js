import axios from "axios";

const API_URL = "http://localhost:8080/api/applications";

export const saveApplication = async (application) => {
    const response = await axios.post(API_URL, application);
    return response.data;
};

export const getApplications = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
export const saveJourneyEvent = async (event) => {
    const response = await axios.post(
        "http://localhost:8080/api/events",
        event
    );

    return response.data;
};
export const getJourneyEvents = async () => {
    const response = await axios.get(
        "http://localhost:8080/api/events"
    );

    return response.data;

};
export const getJourneyAnalytics = async () => {
    const response = await axios.get(
        "http://localhost:8080/api/analytics"
    );

    return response.data;
};