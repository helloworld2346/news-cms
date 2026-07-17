package service  
  
import (  
	"errors"  
  
	"golang.org/x/crypto/bcrypt"  
  
	authEntity "github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"github.com/helloworld2346/news-cms/backend/internal/user/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/user/mapper"  
	"github.com/helloworld2346/news-cms/backend/internal/user/repository"  
)  
  
type UserService interface {  
	List(page, pageSize int) ([]dto.UserResponse, int64, error)  
	Create(req dto.CreateUserRequest) (dto.UserResponse, error)  
	Update(id uint, req dto.UpdateUserRequest) (dto.UserResponse, error)  
	Delete(id uint) error  
	AssignRoles(id uint, roleIDs []uint) (dto.UserResponse, error)  
}  
  
type userService struct{ repo repository.UserRepository }  
  
func NewUserService(repo repository.UserRepository) UserService {  
	return &userService{repo: repo}  
}  
  
func (s *userService) List(page, pageSize int) ([]dto.UserResponse, int64, error) {  
	if page < 1 {  
		page = 1  
	}  
	if pageSize < 1 {  
		pageSize = 20  
	}  
	items, total, err := s.repo.List((page-1)*pageSize, pageSize)  
	if err != nil {  
		return nil, 0, err  
	}  
	return mapper.ToUserResponseList(items), total, nil  
}  
  
func (s *userService) Create(req dto.CreateUserRequest) (dto.UserResponse, error) {  
	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)  
	if err != nil {  
		return dto.UserResponse{}, err  
	}  
	u := &authEntity.User{  
		Username:     req.Username,  
		FullName:     req.FullName,  
		PasswordHash: string(hash),  
		IsActive:     req.IsActive,  
	}  
	if err := s.repo.Create(u); err != nil {  
		return dto.UserResponse{}, err  
	}  
	if len(req.RoleIDs) > 0 {  
		if err := s.repo.ReplaceRoles(u, toRoles(req.RoleIDs)); err != nil {  
			return dto.UserResponse{}, err  
		}  
	}  
	created, err := s.repo.FindByID(u.ID)  
	if err != nil {  
		return dto.UserResponse{}, err  
	}  
	return mapper.ToUserResponse(created), nil  
}  
  
func (s *userService) Update(id uint, req dto.UpdateUserRequest) (dto.UserResponse, error) {  
	u, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.UserResponse{}, errors.New("user not found")  
	}  
	u.FullName = req.FullName  
	u.IsActive = req.IsActive  
	if req.Password != "" {  
		hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)  
		if err != nil {  
			return dto.UserResponse{}, err  
		}  
		u.PasswordHash = string(hash)  
	}  
	if err := s.repo.Update(u); err != nil {  
		return dto.UserResponse{}, err  
	}  
	updated, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.UserResponse{}, err  
	}  
	return mapper.ToUserResponse(updated), nil  
}  
  
func (s *userService) Delete(id uint) error {  
	return s.repo.Delete(id)  
}  
  
func (s *userService) AssignRoles(id uint, roleIDs []uint) (dto.UserResponse, error) {  
	u, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.UserResponse{}, errors.New("user not found")  
	}  
	if err := s.repo.ReplaceRoles(u, toRoles(roleIDs)); err != nil {  
		return dto.UserResponse{}, err  
	}  
	updated, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.UserResponse{}, err  
	}  
	return mapper.ToUserResponse(updated), nil  
}  

func toRoles(ids []uint) []authEntity.Role {  
	roles := make([]authEntity.Role, 0, len(ids))  
	for _, id := range ids {  
		roles = append(roles, authEntity.Role{ID: id})  
	}  
	return roles  
}