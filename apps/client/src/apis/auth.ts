import type { IRegisterData, ILoginData } from "@/types/auth";
import axiosInstance from "@/utils/axios";

export function loginApi(data: ILoginData) {
  return axiosInstance.post<{
    token: string;
  }>("/auth/login", data);
}

export function registerApi(data: IRegisterData) {
  return axiosInstance.post<{}>("/auth/register", data);
}
