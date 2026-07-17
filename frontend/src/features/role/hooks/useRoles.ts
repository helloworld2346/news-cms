import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { roleService } from "@/features/role/services/roleService";
import type {
  CreateRolePayload,
  UpdateRolePayload,
} from "@/features/role/types";

const KEY = ["roles"];

export function useRoles() {
  return useQuery({ queryKey: KEY, queryFn: () => roleService.list() });
}

export function useRoleMutations() {
  const qc = useQueryClient();
  const invalidate = () => qc.invalidateQueries({ queryKey: KEY });

  const create = useMutation({
    mutationFn: (p: CreateRolePayload) => roleService.create(p),
    onSuccess: invalidate,
  });
  const update = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateRolePayload }) =>
      roleService.update(id, payload),
    onSuccess: invalidate,
  });
  const remove = useMutation({
    mutationFn: (id: number) => roleService.remove(id),
    onSuccess: invalidate,
  });
  const assignPermissions = useMutation({
    mutationFn: ({
      id,
      permissionIds,
    }: {
      id: number;
      permissionIds: number[];
    }) => roleService.assignPermissions(id, permissionIds),
    onSuccess: invalidate,
  });

  return { create, update, remove, assignPermissions };
}
