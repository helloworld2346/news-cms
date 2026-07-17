package dto  
  
type CreateUserRequest struct {  
	Username string `json:"username" binding:"required,min=3"`  
	Password string `json:"password" binding:"required,min=6"`  
	FullName string `json:"full_name" binding:"required"`  
	IsActive bool   `json:"is_active"`  
	RoleIDs  []uint `json:"role_ids"`  
}  
  
type UpdateUserRequest struct {  
	FullName string `json:"full_name"`  
	IsActive bool   `json:"is_active"`  
	Password string `json:"password"`
}  
  
type AssignRolesRequest struct {  
	RoleIDs []uint `json:"role_ids"`  
}  
  
type UserResponse struct {  
	ID       uint     `json:"id"`  
	Username string   `json:"username"`  
	FullName string   `json:"full_name"`  
	IsActive bool     `json:"is_active"`  
	Roles    []string `json:"roles"`  
}