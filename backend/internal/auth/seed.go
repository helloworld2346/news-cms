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

func SeedPermissions(db *gorm.DB) error {  
	codes := []struct{ Code, Name string }{  
		{"user.read", "Xem người dùng"},  
		{"user.create", "Tạo người dùng"},  
		{"user.update", "Sửa người dùng"},  
		{"user.delete", "Xóa người dùng"},  
		{"role.read", "Xem vai trò"},  
		{"role.create", "Tạo vai trò"},  
		{"role.update", "Sửa vai trò"},  
		{"role.delete", "Xóa vai trò"},  
		{"permission.read", "Xem quyền"},  
		{"permission.create", "Tạo quyền"},  
		{"permission.update", "Sửa quyền"},  
		{"permission.delete", "Xóa quyền"},  
	}  
	var perms []entity.Permission  
	for _, c := range codes {  
		p := entity.Permission{Code: c.Code, Name: c.Name}  
		if err := db.Where("code = ?", c.Code).FirstOrCreate(&p, entity.Permission{Code: c.Code}).Error; err != nil {  
			return err  
		}  
		perms = append(perms, p)  
	}  
	var adminRole entity.Role  
	if err := db.Where("name = ?", "admin").First(&adminRole).Error; err != nil {  
		return err  
	}  
	return db.Model(&adminRole).Association("Permissions").Replace(perms)  
}