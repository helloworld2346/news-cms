export interface Permission {
  id: number;
  code: string;
  name: string;
}

export interface CreatePermissionPayload {
  code: string;
  name: string;
}
