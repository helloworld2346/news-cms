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

func CORS(allowedOrigins []string) gin.HandlerFunc {  
	allowed := make(map[string]bool, len(allowedOrigins))  
	for _, o := range allowedOrigins {  
		allowed[o] = true  
	}  
	return func(c *gin.Context) {  
		origin := c.Request.Header.Get("Origin")  
		if allowed[origin] {  
			c.Header("Access-Control-Allow-Origin", origin)  
		}  
		c.Header("Vary", "Origin")  
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")  
		c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")  
		c.Header("Access-Control-Allow-Credentials", "true")  
		c.Header("Access-Control-Max-Age", "86400")  
  
		if c.Request.Method == http.MethodOptions {  
			c.AbortWithStatus(http.StatusNoContent)  
			return  
		}  
		c.Next()  
	}  
}