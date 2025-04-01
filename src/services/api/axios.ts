import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { EnvVars } from '../../../env';

const api: AxiosInstance = axios.create({
  baseURL: EnvVars.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
