package routes  
  
import (  
	"github.com/gin-gonic/gin"  
	"gorm.io/gorm"  
  
	"github.com/helloworld2346/news-cms/backend/configs"  
  
	authHandler "github.com/helloworld2346/news-cms/backend/internal/auth/handler"  
	authRepo "github.com/helloworld2346/news-cms/backend/internal/auth/repository"  
	authSvc "github.com/helloworld2346/news-cms/backend/internal/auth/service"  
  
	permHandler "github.com/helloworld2346/news-cms/backend/internal/permission/handler"  
	permRepo "github.com/helloworld2346/news-cms/backend/internal/permission/repository"  
	permSvc "github.com/helloworld2346/news-cms/backend/internal/permission/service"  
  
	roleHandler "github.com/helloworld2346/news-cms/backend/internal/role/handler"  
	roleRepo "github.com/helloworld2346/news-cms/backend/internal/role/repository"  
	roleSvc "github.com/helloworld2346/news-cms/backend/internal/role/service"  
  
	userHandler "github.com/helloworld2346/news-cms/backend/internal/user/handler"  
	userRepo "github.com/helloworld2346/news-cms/backend/internal/user/repository"  
	userSvc "github.com/helloworld2346/news-cms/backend/internal/user/service"  
  
	"github.com/helloworld2346/news-cms/backend/pkg/jwt"  
)  
  
func Register(r *gin.Engine, db *gorm.DB, cfg *configs.Config) {  
	// CORS phải đứng trước mọi route để preflight OPTIONS được xử lý  
	r.Use(CORSMiddleware(cfg.CORSAllowedOrigins))  
  
	jwtMgr := jwt.NewManager(cfg.JWTSecret, cfg.JWTAccessTTL, cfg.JWTRefreshTTL)  
  
	// ---- module auth ----  
	aRepo := authRepo.NewAuthRepository(db)  
	aSvc := authSvc.NewAuthService(aRepo, jwtMgr)  
	aHandler := authHandler.NewAuthHandler(aSvc)  
  
	// ---- module permission ----  
	pRepo := permRepo.NewPermissionRepository(db)  
	pSvc := permSvc.NewPermissionService(pRepo)  
	pH := permHandler.NewPermissionHandler(pSvc)  
  
	// ---- module role ----  
	rRepo := roleRepo.NewRoleRepository(db)  
	rSvc := roleSvc.NewRoleService(rRepo)  
	rH := roleHandler.NewRoleHandler(rSvc)  
  
	// ---- module user ----  
	uRepo := userRepo.NewUserRepository(db)  
	uSvc := userSvc.NewUserService(uRepo)  
	uH := userHandler.NewUserHandler(uSvc)  
  
	api := r.Group("/api/v1")  
	{  
		auth := api.Group("/auth")  
		{  
			auth.POST("/login", aHandler.Login)  
			auth.POST("/refresh", aHandler.Refresh)  
			auth.GET("/me", AuthMiddleware(jwtMgr), aHandler.Me)  
		}  
  
		// Tất cả route admin đều yêu cầu đăng nhập (AuthMiddleware),  
		// và siết thêm theo permission code qua RequirePermission.  
		admin := api.Group("", AuthMiddleware(jwtMgr))  
		{  
			// permissions  
			admin.GET("/permissions", RequirePermission(db, "permission.read"), pH.List)  
			admin.POST("/permissions", RequirePermission(db, "permission.create"), pH.Create)  
			admin.PUT("/permissions/:id", RequirePermission(db, "permission.update"), pH.Update)  
			admin.DELETE("/permissions/:id", RequirePermission(db, "permission.delete"), pH.Delete)  
  
			// roles  
			admin.GET("/roles", RequirePermission(db, "role.read"), rH.List)  
			admin.POST("/roles", RequirePermission(db, "role.create"), rH.Create)  
			admin.PUT("/roles/:id", RequirePermission(db, "role.update"), rH.Update)  
			admin.DELETE("/roles/:id", RequirePermission(db, "role.delete"), rH.Delete)  
			admin.PUT("/roles/:id/permissions", RequirePermission(db, "role.update"), rH.AssignPermissions)  
  
			// users  
			admin.GET("/users", RequirePermission(db, "user.read"), uH.List)  
			admin.POST("/users", RequirePermission(db, "user.create"), uH.Create)  
			admin.PUT("/users/:id", RequirePermission(db, "user.update"), uH.Update)  
			admin.DELETE("/users/:id", RequirePermission(db, "user.delete"), uH.Delete)  
			admin.PUT("/users/:id/roles", RequirePermission(db, "user.update"), uH.AssignRoles)  
		}  
	}  
}