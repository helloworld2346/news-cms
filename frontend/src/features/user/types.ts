export interface User {
  id: number;
  username: string;
  full_name: string;
  is_active: boolean;
  roles: string[];
}

export interface UserListResponse {
  items: User[];
  total: number;
  page: number;
  page_size: number;
}

export interface CreateUserPayload {
  username: string;
  password: string;
  full_name: string;
  is_active: boolean;
}

export interface UpdateUserPayload {
  full_name?: string;
  password?: string;
  is_active?: boolean;
}
