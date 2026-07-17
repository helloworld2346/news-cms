import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/features/user/services/userService";
import type {
  CreateUserPayload,
  UpdateUserPayload,
} from "@/features/user/types";

const KEY = ["users"];

export function useUsers(page = 1, pageSize = 20) {
  return useQuery({
    queryKey: [...KEY, page, pageSize],
    queryFn: () => userService.list(page, pageSize),
  });
}

export function useUserMutations() {
  const qc = useQueryClient();
  const invalidate = () => qc.invalidateQueries({ queryKey: KEY });

  const create = useMutation({
    mutationFn: (p: CreateUserPayload) => userService.create(p),
    onSuccess: invalidate,
  });
  const update = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateUserPayload }) =>
      userService.update(id, payload),
    onSuccess: invalidate,
  });
  const remove = useMutation({
    mutationFn: (id: number) => userService.remove(id),
    onSuccess: invalidate,
  });
  const assignRoles = useMutation({
    mutationFn: ({ id, roleIds }: { id: number; roleIds: number[] }) =>
      userService.assignRoles(id, roleIds),
    onSuccess: invalidate,
  });

  return { create, update, remove, assignRoles };
}
