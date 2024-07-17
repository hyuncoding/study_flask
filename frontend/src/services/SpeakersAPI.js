import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";

// Function to handle errors
const handleErrors = (error) => {
    if (error.response) {
        // THe request was made and the server responded with a status code
        console.error("API error:", error.response.status, error.response.data);
    } else if (error.request) {
        // The request was made but no response was received
        console.error("API error: No response received", error.request);
    } else {
        // Something else happened while making the request
        console.error("API error:", error.message);
    }
    throw error;
};

// Function to set headers with Content-Type: application/json
const setHeaders = () => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
};

// Function to get speakers
export const getSpeakers = async () => {
    try {
        setHeaders();
        const response = await axios.get(`${API_URL}/speakers`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
};
