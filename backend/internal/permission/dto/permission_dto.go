package dto  
  
type CreatePermissionRequest struct {  
	Code string `json:"code" binding:"required"`  
	Name string `json:"name" binding:"required"`  
}  
  
type UpdatePermissionRequest struct {  
	Name string `json:"name" binding:"required"`  
}  
  
type PermissionResponse struct {  
	ID   uint   `json:"id"`  
	Code string `json:"code"`  
	Name string `json:"name"`  
}