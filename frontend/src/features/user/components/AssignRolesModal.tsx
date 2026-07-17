import { useState } from "react";
import { useRoles } from "@/features/role/hooks/useRoles";
import { useUserMutations } from "@/features/user/hooks/useUsers";
import { Button } from "@/components/ui/button";
import type { User } from "@/features/user/types";

export default function AssignRolesModal({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) {
  const { data } = useRoles();
  const { assignRoles } = useUserMutations();
  const roles = data ?? [];
  const [selected, setSelected] = useState<number[]>(
    roles.filter((r) => user.roles?.includes(r.name)).map((r) => r.id),
  );

  const toggle = (id: number) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-96 rounded-lg bg-white p-5">
        <h3 className="mb-3 font-semibold">Gán vai trò cho {user.username}</h3>
        <div className="max-h-64 space-y-2 overflow-auto">
          {roles.map((r) => (
            <label key={r.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.includes(r.id)}
                onChange={() => toggle(r.id)}
              />
              {r.name}
            </label>
          ))}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            Hủy
          </Button>
          <Button
            disabled={assignRoles.isPending}
            onClick={() =>
              assignRoles.mutate(
                { id: user.id, roleIds: selected },
                { onSuccess: onClose },
              )
            }
          >
            Lưu
          </Button>
        </div>
      </div>
    </div>
  );
}
