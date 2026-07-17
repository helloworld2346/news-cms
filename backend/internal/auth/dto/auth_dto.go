package dto  
  
type LoginRequest struct {  
	Username string `json:"username" binding:"required"`  
	Password string `json:"password" binding:"required"`  
}  
  
type TokenPair struct {  
	AccessToken  string `json:"access_token"`  
	RefreshToken string `json:"refresh_token"`  
	TokenType    string `json:"token_type"`  
	ExpiresIn    int64  `json:"expires_in"` // giây  
}  
  
type RefreshRequest struct {  
	RefreshToken string `json:"refresh_token" binding:"required"`  
}  
  
type UserResponse struct {  
	ID       uint     `json:"id"`  
	Username string   `json:"username"`  
	Email    string   `json:"email"`  
	FullName string   `json:"full_name"`  
	IsActive bool     `json:"is_active"`  
	Roles    []string `json:"roles"`  
}