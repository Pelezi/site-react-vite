import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;

const api = axios.create({
    // baseURL: 'https://json-server-render-uuc9.onrender.com',
    // baseURL: apiURL,
    baseURL: 'https://site-pessoal-api-cl1g.onrender.com/api',
});

export default api;