package repository  
  
import (  
	authentity "github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"gorm.io/gorm"  
)  
  
type RoleRepository interface {  
	List() ([]authentity.Role, error)  
	FindByID(id uint) (*authentity.Role, error)  
	Create(r *authentity.Role) error  
	Update(r *authentity.Role) error  
	Delete(id uint) error  
	ReplacePermissions(role *authentity.Role, perms []authentity.Permission) error  
}  
  
type roleRepository struct{ db *gorm.DB }  
  
func NewRoleRepository(db *gorm.DB) RoleRepository { return &roleRepository{db: db} }  
  
func (r *roleRepository) List() ([]authentity.Role, error) {  
	var items []authentity.Role  
	return items, r.db.Preload("Permissions").Order("id asc").Find(&items).Error  
}  
func (r *roleRepository) FindByID(id uint) (*authentity.Role, error) {  
	var role authentity.Role  
	return &role, r.db.Preload("Permissions").First(&role, id).Error  
}  
func (r *roleRepository) Create(role *authentity.Role) error { return r.db.Create(role).Error }  
func (r *roleRepository) Update(role *authentity.Role) error {  
	return r.db.Model(role).Updates(map[string]any{"name": role.Name, "description": role.Description}).Error  
}  
func (r *roleRepository) Delete(id uint) error {  
	return r.db.Select("Permissions").Delete(&authentity.Role{ID: id}).Error  
}  
func (r *roleRepository) ReplacePermissions(role *authentity.Role, perms []authentity.Permission) error {  
	return r.db.Model(role).Association("Permissions").Replace(perms)  
}