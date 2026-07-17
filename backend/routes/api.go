package routes  
  
import (  
	"github.com/gin-gonic/gin"  
	"github.com/helloworld2346/news-cms/backend/configs"  
	authHandler "github.com/helloworld2346/news-cms/backend/internal/auth/handler"  
	authRepo "github.com/helloworld2346/news-cms/backend/internal/auth/repository"  
	authSvc "github.com/helloworld2346/news-cms/backend/internal/auth/service"  
	"github.com/helloworld2346/news-cms/backend/pkg/jwt"  
	"gorm.io/gorm"  
)  
  
func Register(r *gin.Engine, db *gorm.DB, cfg *configs.Config) {  
	// CORS phải đứng trước mọi route để preflight OPTIONS được xử lý  
	r.Use(CORSMiddleware(cfg.CORSAllowedOrigins))  
  
	jwtMgr := jwt.NewManager(cfg.JWTSecret, cfg.JWTAccessTTL, cfg.JWTRefreshTTL)  
  
	// wiring module auth  
	aRepo := authRepo.NewAuthRepository(db)  
	aSvc := authSvc.NewAuthService(aRepo, jwtMgr)  
	aHandler := authHandler.NewAuthHandler(aSvc)  
  
	api := r.Group("/api/v1")  
	{  
		auth := api.Group("/auth")  
		{  
			auth.POST("/login", aHandler.Login)  
			auth.POST("/refresh", aHandler.Refresh)  
			auth.GET("/me", AuthMiddleware(jwtMgr), aHandler.Me)  
		}  
	}  
}