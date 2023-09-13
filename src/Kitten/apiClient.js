// apiClient.js

import axios from 'axios';

// Configura la URL base para tus solicitudes aquí
export const baseURL = 'http://localhost:3000'; // Cambia esto a tu URL raíz
const apiClient = axios.create({
  baseURL,
});

export default apiClient;
