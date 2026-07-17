package database  
  
import (  
	"fmt"  
  
	"github.com/helloworld2346/news-cms/backend/configs"  
	"gorm.io/driver/postgres"  
	"gorm.io/gorm"  
)  
  
func Connect(cfg *configs.Config) (*gorm.DB, error) {  
	dsn := fmt.Sprintf(  
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",  
		cfg.DBHost, cfg.DBPort, cfg.DBUser, cfg.DBPassword, cfg.DBName, cfg.DBSSLMode,  
	)  
	return gorm.Open(postgres.Open(dsn), &gorm.Config{})  
}