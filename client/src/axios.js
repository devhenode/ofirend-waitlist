import axios from 'axios';

// Create an Axios instance with global settings
const axiosInstance = axios.create({
  baseURL: 'https://your-backend-api.com', // Your backend's base URL
  timeout: 5000, // Timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
    // You can add other custom headers like authentication tokens
  },
});

export default axiosInstance;
