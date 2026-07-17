package response  
  
import "github.com/gin-gonic/gin"  
  
func OK(c *gin.Context, data interface{}) {  
	c.JSON(200, gin.H{"success": true, "data": data})  
}  
  
func Error(c *gin.Context, status int, msg string) {  
	c.AbortWithStatusJSON(status, gin.H{"success": false, "error": msg})  
}