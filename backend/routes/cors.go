package routes  
  
import (  
	"net/http"  
  
	"github.com/gin-gonic/gin"  
)  
  
// CORSMiddleware cho phép các origin trong allowedOrigins gọi API.  
func CORSMiddleware(allowedOrigins []string) gin.HandlerFunc {  
	allowed := make(map[string]bool, len(allowedOrigins))  
	for _, o := range allowedOrigins {  
		allowed[o] = true  
	}  
  
	return func(c *gin.Context) {  
		origin := c.GetHeader("Origin")  
		if origin != "" && allowed[origin] {  
			c.Header("Access-Control-Allow-Origin", origin)  
			c.Header("Vary", "Origin")  
			c.Header("Access-Control-Allow-Credentials", "true")  
			c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")  
			c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")  
			c.Header("Access-Control-Max-Age", "86400")  
		}  
  
		// preflight  
		if c.Request.Method == http.MethodOptions {  
			c.AbortWithStatus(http.StatusNoContent)  
			return  
		}  
  
		c.Next()  
	}  
}