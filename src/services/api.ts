import axios from 'axios';

const API_URL = 'https://tu-api-remota.com/api';

export const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    // const token = obtenerTokenLocal();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});