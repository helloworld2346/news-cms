package routes

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/helloworld2346/news-cms/backend/pkg/jwt"
	"github.com/helloworld2346/news-cms/backend/pkg/response"
	"gorm.io/gorm"
)

func AuthMiddleware(jwtMgr *jwt.Manager) gin.HandlerFunc {
	return func(c *gin.Context) {
		header := c.GetHeader("Authorization")
		if !strings.HasPrefix(header, "Bearer ") {
			response.Error(c, http.StatusUnauthorized, "missing bearer token")
			return
		}
		tokenStr := strings.TrimPrefix(header, "Bearer ")
		claims, err := jwtMgr.Parse(tokenStr)
		if err != nil || claims.Type != jwt.AccessToken {
			response.Error(c, http.StatusUnauthorized, "invalid or expired token")
			return
		}
		c.Set("user_id", claims.UserID)
		c.Next()
	}
}

func RequirePermission(db *gorm.DB, code string) gin.HandlerFunc {
	return func(c *gin.Context) {
		uid := c.GetUint("user_id")
		var count int64
		db.Table("permissions p").
			Joins("JOIN role_permissions rp ON rp.permission_id = p.id").
			Joins("JOIN user_roles ur ON ur.role_id = rp.role_id").
			Where("ur.user_id = ? AND p.code = ?", uid, code).
			Count(&count)
		if count == 0 {
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{
				"success": false, "error": "permission denied",
			})
			return
		}
		c.Next()
	}
}
