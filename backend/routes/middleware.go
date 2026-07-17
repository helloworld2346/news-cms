package routes  
  
import (  
	"net/http"  
	"strings"  
  
	"github.com/gin-gonic/gin"  
	"github.com/helloworld2346/news-cms/backend/pkg/jwt"  
	"github.com/helloworld2346/news-cms/backend/pkg/response"  
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