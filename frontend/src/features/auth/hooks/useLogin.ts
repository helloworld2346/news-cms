import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, getMe } from "@/features/auth/services/authService";
import { useAuthStore } from "@/store/authStore";
import type { LoginRequest } from "@/types/auth";

export function useLogin() {
  const navigate = useNavigate();
  const setTokens = useAuthStore((s) => s.setTokens);
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: async (payload: LoginRequest) => {
      const tokens = await login(payload);
      setTokens(tokens.access_token, tokens.refresh_token);
      const user = await getMe();
      return user;
    },
    onSuccess: (user) => {
      setUser(user);
      navigate("/admin/dashboard", { replace: true });
    },
  });
}
