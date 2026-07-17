package dto  
  
type CreateRoleRequest struct {  
	Name        string `json:"name" binding:"required"`  
	Description string `json:"description"`  
}  
  
type UpdateRoleRequest struct {  
	Name        string `json:"name" binding:"required"`  
	Description string `json:"description"`  
}  
  
type AssignPermissionsRequest struct {  
	PermissionIDs []uint `json:"permission_ids"`  
}  
  
type RoleResponse struct {  
	ID          uint     `json:"id"`  
	Name        string   `json:"name"`  
	Description string   `json:"description"`  
	Permissions []string `json:"permissions"`  
}