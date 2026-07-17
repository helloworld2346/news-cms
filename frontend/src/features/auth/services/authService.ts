import { api } from "@/services/api";
import type {
  ApiResponse,
  LoginRequest,
  TokenPair,
  UserResponse,
} from "@/types/auth";

export async function login(payload: LoginRequest): Promise<TokenPair> {
  const { data } = await api.post<ApiResponse<TokenPair>>(
    "/auth/login",
    payload,
  );
  if (!data.success || !data.data) {
    throw new Error(data.error ?? "Đăng nhập thất bại");
  }
  return data.data;
}

export async function getMe(): Promise<UserResponse> {
  const { data } = await api.get<ApiResponse<UserResponse>>("/auth/me");
  if (!data.success || !data.data) {
    throw new Error(data.error ?? "Không lấy được thông tin người dùng");
  }
  return data.data;
}
