const API_URL = "https://quiz-realm-server-side.onrender.com";
import axios from "axios";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(function (response) {
  return response;
});

export default api;
