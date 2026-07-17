package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/helloworld2346/news-cms/backend/configs"
	"github.com/helloworld2346/news-cms/backend/internal/auth"
	"github.com/helloworld2346/news-cms/backend/pkg/database"
	"github.com/helloworld2346/news-cms/backend/routes"
)

func main() {
	cfg := configs.Load()

	db, err := database.Connect(cfg)
	if err != nil {
		log.Fatalf("failed to connect database: %v", err)
	}

	if err := auth.Migrate(db); err != nil {
		log.Fatalf("migrate failed: %v", err)
	}
	if err := auth.SeedAdmin(db); err != nil {
		log.Fatalf("seed admin failed: %v", err)
	}
	if err := auth.SeedPermissions(db); err != nil {
		log.Fatalf("seed permission failed: %v", err)
	}

	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok", "app": cfg.AppName})
	})

	routes.Register(r, db, cfg)

	log.Printf("%s listening on :%s", cfg.AppName, cfg.AppPort)
	if err := r.Run(":" + cfg.AppPort); err != nil {
		log.Fatalf("server error: %v", err)
	}
}
