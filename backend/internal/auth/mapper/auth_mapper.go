package mapper  
  
import (  
	"github.com/helloworld2346/news-cms/backend/internal/auth/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
)  
  
func ToUserResponse(u *entity.User) dto.UserResponse {  
	return dto.UserResponse{  
		ID:       u.ID,  
		Username: u.Username,  
		Email:    u.Email,  
		FullName: u.FullName,  
		IsActive: u.IsActive,  
	}  
}