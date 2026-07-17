package service  
  
import (  
	authentity "github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"github.com/helloworld2346/news-cms/backend/internal/role/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/role/repository"  
)  
  
type RoleService interface {  
	List() ([]dto.RoleResponse, error)  
	Create(req dto.CreateRoleRequest) (dto.RoleResponse, error)  
	Update(id uint, req dto.UpdateRoleRequest) (dto.RoleResponse, error)  
	Delete(id uint) error  
	AssignPermissions(id uint, permIDs []uint) (dto.RoleResponse, error)  
}  
  
type roleService struct{ repo repository.RoleRepository }  
  
func NewRoleService(repo repository.RoleRepository) RoleService {  
	return &roleService{repo: repo}  
}  
  
func toResp(r authentity.Role) dto.RoleResponse {  
	perms := make([]string, 0, len(r.Permissions))  
	for _, p := range r.Permissions {  
		perms = append(perms, p.Code)  
	}  
	return dto.RoleResponse{ID: r.ID, Name: r.Name, Description: r.Description, Permissions: perms}  
}  
  
func (s *roleService) List() ([]dto.RoleResponse, error) {  
	items, err := s.repo.List()  
	if err != nil {  
		return nil, err  
	}  
	out := make([]dto.RoleResponse, 0, len(items))  
	for _, r := range items {  
		out = append(out, toResp(r))  
	}  
	return out, nil  
}  
  
func (s *roleService) Create(req dto.CreateRoleRequest) (dto.RoleResponse, error) {  
	role := authentity.Role{Name: req.Name, Description: req.Description}  
	if err := s.repo.Create(&role); err != nil {  
		return dto.RoleResponse{}, err  
	}  
	return toResp(role), nil  
}  
  
func (s *roleService) Update(id uint, req dto.UpdateRoleRequest) (dto.RoleResponse, error) {  
	role, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.RoleResponse{}, err  
	}  
	role.Name = req.Name  
	role.Description = req.Description  
	if err := s.repo.Update(role); err != nil {  
		return dto.RoleResponse{}, err  
	}  
	return toResp(*role), nil  
}  
  
func (s *roleService) Delete(id uint) error { return s.repo.Delete(id) }  
  
func (s *roleService) AssignPermissions(id uint, permIDs []uint) (dto.RoleResponse, error) {  
	role, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.RoleResponse{}, err  
	}  
	perms := make([]authentity.Permission, 0, len(permIDs))  
	for _, pid := range permIDs {  
		perms = append(perms, authentity.Permission{ID: pid})  
	}  
	if err := s.repo.ReplacePermissions(role, perms); err != nil {  
		return dto.RoleResponse{}, err  
	}  
	updated, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.RoleResponse{}, err  
	}  
	return toResp(*updated), nil  
}