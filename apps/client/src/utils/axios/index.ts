import axios from "axios";
import { UniAdapter } from "uniapp-axios-adapter";

const axiosInstance = axios.create({
  adapter: UniAdapter,
  timeout: 5000,
  baseURL: import.meta.env.DEV
    ? import.meta.env.CLIENT_SERVER_URL + "/api"
    : import.meta.env.CLIENT_SERVER_URL,
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  }
  // (err) => {
  //   return Promise.reject(err);
  // }
);

export default axiosInstance;
