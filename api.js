// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // or the URL where your backend is hosted

export const registerUser = (userData) => axios.post(`${API_BASE_URL}/register`, userData);
export const loginUser = (credentials) => axios.post(`${API_BASE_URL}/login`, credentials);
export const fetchUserProfile = (userId) => axios.get(`${API_BASE_URL}/users/${userId}`);
