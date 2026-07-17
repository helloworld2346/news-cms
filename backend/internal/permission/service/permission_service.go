package service  
  
import (  
	authentity "github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"github.com/helloworld2346/news-cms/backend/internal/permission/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/permission/repository"  
)  
  
type PermissionService interface {  
	List() ([]dto.PermissionResponse, error)  
	Create(req dto.CreatePermissionRequest) (dto.PermissionResponse, error)  
	Update(id uint, req dto.UpdatePermissionRequest) (dto.PermissionResponse, error)  
	Delete(id uint) error  
}  
  
type permissionService struct{ repo repository.PermissionRepository }  
  
func NewPermissionService(repo repository.PermissionRepository) PermissionService {  
	return &permissionService{repo: repo}  
}  
  
func toResp(p authentity.Permission) dto.PermissionResponse {  
	return dto.PermissionResponse{ID: p.ID, Code: p.Code, Name: p.Name}  
}  
  
func (s *permissionService) List() ([]dto.PermissionResponse, error) {  
	items, err := s.repo.List()  
	if err != nil {  
		return nil, err  
	}  
	out := make([]dto.PermissionResponse, 0, len(items))  
	for _, p := range items {  
		out = append(out, toResp(p))  
	}  
	return out, nil  
}  
  
func (s *permissionService) Create(req dto.CreatePermissionRequest) (dto.PermissionResponse, error) {  
	p := authentity.Permission{Code: req.Code, Name: req.Name}  
	if err := s.repo.Create(&p); err != nil {  
		return dto.PermissionResponse{}, err  
	}  
	return toResp(p), nil  
}  
  
func (s *permissionService) Update(id uint, req dto.UpdatePermissionRequest) (dto.PermissionResponse, error) {  
	p, err := s.repo.FindByID(id)  
	if err != nil {  
		return dto.PermissionResponse{}, err  
	}  
	p.Name = req.Name  
	if err := s.repo.Update(p); err != nil {  
		return dto.PermissionResponse{}, err  
	}  
	return toResp(*p), nil  
}  
  
func (s *permissionService) Delete(id uint) error { return s.repo.Delete(id) }