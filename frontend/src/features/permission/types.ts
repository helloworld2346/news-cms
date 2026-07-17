export interface Permission {
  id: number;
  code: string;
  description: string;
}

export interface CreatePermissionPayload {
  code: string;
  description: string;
}
