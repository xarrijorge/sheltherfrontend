// src/services/axiosConfig.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://sheltherbackend-gk6ws4agna-uc.a.run.app/api', // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Request interceptor to add headers
instance.interceptors.request.use(
    async (config) => {
        // Retrieve the token from AsyncStorage
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle the request error here
        return Promise.reject(error);
    }
);

// Response interceptor to handle responses and errors
instance.interceptors.response.use(
    (response) => {
        // Do something with the response data
        return response;
    },
    (error) => {
        // Handle the response error here
        return Promise.reject(error);
    }
);

export default instance;