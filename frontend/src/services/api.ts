import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@/store/authStore";
import type { ApiResponse, TokenPair } from "@/types/auth";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    const { refreshToken, setTokens, logout } = useAuthStore.getState();

    const isRefreshCall = original?.url?.includes("/auth/refresh");
    if (
      error.response?.status === 401 &&
      original &&
      !original._retry &&
      refreshToken &&
      !isRefreshCall
    ) {
      original._retry = true;
      try {
        const { data } = await axios.post<ApiResponse<TokenPair>>(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
          { refresh_token: refreshToken },
        );
        if (data.success && data.data) {
          setTokens(data.data.access_token, data.data.refresh_token);
          original.headers.Authorization = `Bearer ${data.data.access_token}`;
          return api(original);
        }
      } catch {
        logout();
      }
      logout();
    }
    return Promise.reject(error);
  },
);