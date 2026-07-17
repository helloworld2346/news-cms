package main  
  
import (  
	"log"  
  
	"github.com/gin-gonic/gin"  
	"github.com/helloworld2346/news-cms/backend/configs"  
	"github.com/helloworld2346/news-cms/backend/pkg/database"  
)  
  
func main() {  
	cfg := configs.Load()  
  
	db, err := database.Connect(cfg)  
	if err != nil {  
		log.Fatalf("failed to connect database: %v", err)  
	}  
	_ = db // sẽ inject vào các module ở bước sau  
  
	r := gin.Default()  
  
	// healthcheck  
	r.GET("/health", func(c *gin.Context) {  
		c.JSON(200, gin.H{"status": "ok", "app": cfg.AppName})  
	})  
  
	// TODO: routes.Register(r, db, cfg) — wiring module auth ở bước tiếp theo  
  
	log.Printf("%s listening on :%s", cfg.AppName, cfg.AppPort)  
	if err := r.Run(":" + cfg.AppPort); err != nil {  
		log.Fatalf("server error: %v", err)  
	}  
}