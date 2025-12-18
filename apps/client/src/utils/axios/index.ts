import axios from "axios";
import { UniAdapter } from "uniapp-axios-adapter";
import { t } from "i18next";

const axiosInstance = axios.create({
  adapter: UniAdapter,
  timeout: 5000,
  baseURL: import.meta.env.DEV
    ? import.meta.env.CLIENT_SERVER_URL + "/api"
    : import.meta.env.CLIENT_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    uni.showLoading({
      title: t("loading"),
    });
    return config;
  },
  (err) => {
    uni.hideLoading();
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    uni.hideLoading();
    console.log(response);
    const { data, statusCode, status } = response;
    if (status !== 200) {
      uni.showToast({
        title: data.message ?? t("network error"),
        icon: "none",
      });
    }
    return response;
  }
  // (err) => {
  //   return Promise.reject(err);
  // }
);

export default axiosInstance;
