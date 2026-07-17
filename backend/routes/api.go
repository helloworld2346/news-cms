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
	r.Use(CORSMiddleware(cfg.CORSAllowedOrigins))

	jwtMgr := jwt.NewManager(cfg.JWTSecret, cfg.JWTAccessTTL, cfg.JWTRefreshTTL)

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

	pRepo := permRepo.NewPermissionRepository(db)
	pSvc := permSvc.NewPermissionService(pRepo)
	pH := permHandler.NewPermissionHandler(pSvc)

	rRepo := roleRepo.NewRoleRepository(db)
	rSvc := roleSvc.NewRoleService(rRepo)
	rH := roleHandler.NewRoleHandler(rSvc)

	uRepo := userRepo.NewUserRepository(db)
	uSvc := userSvc.NewUserService(uRepo)
	uH := userHandler.NewUserHandler(uSvc)

	admin := api.Group("", AuthMiddleware(jwtMgr))
	{
		admin.GET("/permissions", pH.List)
		admin.POST("/permissions", pH.Create)
		admin.PUT("/permissions/:id", pH.Update)
		admin.DELETE("/permissions/:id", pH.Delete)

		admin.GET("/roles", rH.List)
		admin.POST("/roles", rH.Create)
		admin.PUT("/roles/:id", rH.Update)
		admin.DELETE("/roles/:id", rH.Delete)
		admin.PUT("/roles/:id/permissions", rH.AssignPermissions)

		admin.GET("/users", uH.List)
		admin.POST("/users", uH.Create)
		admin.PUT("/users/:id", uH.Update)
		admin.DELETE("/users/:id", uH.Delete)
		admin.PUT("/users/:id/roles", uH.AssignRoles)
	}
}
