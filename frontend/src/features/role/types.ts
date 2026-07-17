import type { Permission } from "@/features/permission/types";
export interface Role {
  id: number;
  name: string;
  description: string;
  permissions?: Permission[];
}

export interface CreateRolePayload {
  name: string;
  description: string;
}

export interface UpdateRolePayload {
  name: string;
  description?: string;
}
