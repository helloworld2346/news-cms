import { api } from "@/services/api";
import type {
  Role,
  CreateRolePayload,
  UpdateRolePayload,
} from "@/features/role/types";

export const roleService = {
  async list(): Promise<Role[]> {
    const res = await api.get("/roles");
    return res.data.data.items ?? res.data.data;
  },
  async create(payload: CreateRolePayload): Promise<Role> {
    const res = await api.post("/roles", payload);
    return res.data.data;
  },
  async update(id: number, payload: UpdateRolePayload): Promise<Role> {
    const res = await api.put(`/roles/${id}`, payload);
    return res.data.data;
  },
  async remove(id: number): Promise<void> {
    await api.delete(`/roles/${id}`);
  },
  async assignPermissions(id: number, permissionIds: number[]): Promise<void> {
    await api.put(`/roles/${id}/permissions`, {
      permission_ids: permissionIds,
    });
  },
};
