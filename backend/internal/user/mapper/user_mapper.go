package mapper  
  
import (  
	authEntity "github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"github.com/helloworld2346/news-cms/backend/internal/user/dto"  
)  
  
func ToUserResponse(u *authEntity.User) dto.UserResponse {  
	roles := make([]string, 0, len(u.Roles))  
	for _, r := range u.Roles {  
		roles = append(roles, r.Name)  
	}  
	return dto.UserResponse{  
		ID:       u.ID,  
		Username: u.Username,  
		FullName: u.FullName,  
		IsActive: u.IsActive,  
		Roles:    roles,  
	}  
}  
  
func ToUserResponseList(users []authEntity.User) []dto.UserResponse {  
	out := make([]dto.UserResponse, 0, len(users))  
	for i := range users {  
		out = append(out, ToUserResponse(&users[i]))  
	}  
	return out  
}