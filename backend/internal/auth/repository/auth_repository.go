package repository  
  
import (  
	"github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"gorm.io/gorm"  
)  
  
type AuthRepository interface {  
	FindByUsername(username string) (*entity.User, error)  
	FindByID(id uint) (*entity.User, error)  
}  
  
type authRepository struct{ db *gorm.DB }  
  
func NewAuthRepository(db *gorm.DB) AuthRepository { return &authRepository{db: db} }  
  
func (r *authRepository) FindByUsername(username string) (*entity.User, error) {  
	var u entity.User  
	if err := r.db.Where("username = ?", username).First(&u).Error; err != nil {  
		return nil, err  
	}  
	return &u, nil  
}  
  
func (r *authRepository) FindByID(id uint) (*entity.User, error) {  
	var u entity.User  
	if err := r.db.First(&u, id).Error; err != nil {  
		return nil, err  
	}  
	return &u, nil  
}