package auth  
  
import (  
	"log"  
  
	"github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"golang.org/x/crypto/bcrypt"  
	"gorm.io/gorm"  
)  
  
func Migrate(db *gorm.DB) error {  
	return db.AutoMigrate(&entity.User{})  
}  
  
// SeedAdmin tạo user admin mặc định nếu chưa tồn tại (idempotent).  
func SeedAdmin(db *gorm.DB) error {  
	var count int64  
	db.Model(&entity.User{}).Where("username = ?", "admin").Count(&count)  
	if count > 0 {  
		return nil  
	}  
	hash, err := bcrypt.GenerateFromPassword([]byte("admin123"), bcrypt.DefaultCost)  
	if err != nil {  
		return err  
	}  
	admin := entity.User{  
		Username:     "admin",  
		Email:        "admin@local",  
		FullName:     "Quản trị viên",  
		PasswordHash: string(hash),  
		IsActive:     true,  
	}  
	if err := db.Create(&admin).Error; err != nil {  
		return err  
	}  
	log.Println("seeded default admin (username=admin, password=admin123)")  
	return nil  
}