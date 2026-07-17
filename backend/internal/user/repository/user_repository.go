package repository  
  
import (  
	authEntity "github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"gorm.io/gorm"  
)  
  
type UserRepository interface {  
	List(offset, limit int) ([]authEntity.User, int64, error)  
	FindByID(id uint) (*authEntity.User, error)  
	FindByUsername(username string) (*authEntity.User, error)  
	Create(u *authEntity.User) error  
	Update(u *authEntity.User) error  
	Delete(id uint) error  
	ReplaceRoles(u *authEntity.User, roles []authEntity.Role) error  
}  
  
type userRepository struct{ db *gorm.DB }  
  
func NewUserRepository(db *gorm.DB) UserRepository { return &userRepository{db: db} }  
  
func (r *userRepository) List(offset, limit int) ([]authEntity.User, int64, error) {  
	var items []authEntity.User  
	var total int64  
	if err := r.db.Model(&authEntity.User{}).Count(&total).Error; err != nil {  
		return nil, 0, err  
	}  
	err := r.db.Preload("Roles").Order("id asc").Offset(offset).Limit(limit).Find(&items).Error  
	return items, total, err  
}  
  
func (r *userRepository) FindByID(id uint) (*authEntity.User, error) {  
	var u authEntity.User  
	return &u, r.db.Preload("Roles").First(&u, id).Error  
}  
  
func (r *userRepository) FindByUsername(username string) (*authEntity.User, error) {  
	var u authEntity.User  
	return &u, r.db.Preload("Roles").Where("username = ?", username).First(&u).Error  
}  
  
func (r *userRepository) Create(u *authEntity.User) error { return r.db.Create(u).Error }  
  
func (r *userRepository) Update(u *authEntity.User) error {  
	return r.db.Model(u).Updates(map[string]any{  
		"full_name":     u.FullName,  
		"is_active":     u.IsActive,  
		"password_hash": u.PasswordHash,  
	}).Error  
}
  
func (r *userRepository) Delete(id uint) error {  
	return r.db.Select("Roles").Delete(&authEntity.User{ID: id}).Error  
}  
  
func (r *userRepository) ReplaceRoles(u *authEntity.User, roles []authEntity.Role) error {  
	return r.db.Model(u).Association("Roles").Replace(roles)  
}