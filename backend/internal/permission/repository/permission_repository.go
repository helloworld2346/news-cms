package repository  
  
import (  
	authentity "github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"gorm.io/gorm"  
)  
  
type PermissionRepository interface {  
	List() ([]authentity.Permission, error)  
	Create(p *authentity.Permission) error  
	FindByID(id uint) (*authentity.Permission, error)  
	Update(p *authentity.Permission) error  
	Delete(id uint) error  
}  
  
type permissionRepository struct{ db *gorm.DB }  
  
func NewPermissionRepository(db *gorm.DB) PermissionRepository {  
	return &permissionRepository{db: db}  
}  
  
func (r *permissionRepository) List() ([]authentity.Permission, error) {  
	var items []authentity.Permission  
	return items, r.db.Order("id asc").Find(&items).Error  
}  
func (r *permissionRepository) Create(p *authentity.Permission) error { return r.db.Create(p).Error }  
func (r *permissionRepository) FindByID(id uint) (*authentity.Permission, error) {  
	var p authentity.Permission  
	return &p, r.db.First(&p, id).Error  
}  
func (r *permissionRepository) Update(p *authentity.Permission) error { return r.db.Save(p).Error }  
func (r *permissionRepository) Delete(id uint) error {  
	return r.db.Delete(&authentity.Permission{}, id).Error  
}