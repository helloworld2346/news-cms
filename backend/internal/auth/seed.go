package auth  
  
import (  
	"log"  
  
	"github.com/helloworld2346/news-cms/backend/internal/auth/entity"  
	"golang.org/x/crypto/bcrypt"  
	"gorm.io/gorm"  
)  
  
func Migrate(db *gorm.DB) error {  
	return db.AutoMigrate(&entity.User{}, &entity.Role{}, &entity.Permission{})  
}
  
func SeedAdmin(db *gorm.DB) error {  
	var adminRole entity.Role  
	if err := db.Where("name = ?", "admin").FirstOrCreate(&adminRole, entity.Role{  
		Name:        "admin",  
		Description: "Quản trị hệ thống",  
	}).Error; err != nil {  
		return err  
	}  
  
	var admin entity.User  
	err := db.Where("username = ?", "admin").First(&admin).Error  
	if err == nil {  
		return db.Model(&admin).Association("Roles").Replace(&adminRole)  
	}  
	if err != gorm.ErrRecordNotFound {  
		return err  
	}  
  
	hash, err := bcrypt.GenerateFromPassword([]byte("admin123"), bcrypt.DefaultCost)  
	if err != nil {  
		return err  
	}  
	admin = entity.User{  
		Username:     "admin",  
		Email:        "admin@local",  
		FullName:     "Quản trị viên",  
		PasswordHash: string(hash),  
		IsActive:     true,  
		Roles:        []entity.Role{adminRole}, 
	}  
	if err := db.Create(&admin).Error; err != nil {  
		return err  
	}  
	log.Println("seeded default admin (username=admin, password=admin123, role=admin)")  
	return nil  
}