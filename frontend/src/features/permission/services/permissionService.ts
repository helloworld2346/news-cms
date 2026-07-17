import { api } from "@/services/api";
import type {
  Permission,
  CreatePermissionPayload,
} from "@/features/permission/types";

export const permissionService = {
  async list(): Promise<Permission[]> {
    const res = await api.get("/permissions");
    return res.data.data.items ?? res.data.data;
  },
  async create(payload: CreatePermissionPayload): Promise<Permission> {
    const res = await api.post("/permissions", payload);
    return res.data.data;
  },
  async remove(id: number): Promise<void> {
    await api.delete(`/permissions/${id}`);
  },
};
    