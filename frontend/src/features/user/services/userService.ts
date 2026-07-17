import { api } from "@/services/api";
import type {
  User,
  UserListResponse,
  CreateUserPayload,
  UpdateUserPayload,
} from "@/features/user/types";

export const userService = {
  async list(page = 1, pageSize = 20): Promise<UserListResponse> {
    const res = await api.get("/users", {
      params: { page, page_size: pageSize },
    });
    return res.data.data;
  },
  async create(payload: CreateUserPayload): Promise<User> {
    const res = await api.post("/users", payload);
    return res.data.data;
  },
  async update(id: number, payload: UpdateUserPayload): Promise<User> {
    const res = await api.put(`/users/${id}`, payload);
    return res.data.data;
  },
  async remove(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },
  async assignRoles(id: number, roleIds: number[]): Promise<void> {
    await api.put(`/users/${id}/roles`, { role_ids: roleIds });
  },
};
