import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { permissionService } from "@/features/permission/services/permissionService";
import type { CreatePermissionPayload } from "@/features/permission/types";

const KEY = ["permissions"];

export function usePermissions() {
  return useQuery({ queryKey: KEY, queryFn: () => permissionService.list() });
}

export function usePermissionMutations() {
  const qc = useQueryClient();
  const invalidate = () => qc.invalidateQueries({ queryKey: KEY });

  const create = useMutation({
    mutationFn: (p: CreatePermissionPayload) => permissionService.create(p),
    onSuccess: invalidate,
  });
  const remove = useMutation({
    mutationFn: (id: number) => permissionService.remove(id),
    onSuccess: invalidate,
  });

  return { create, remove };
}
