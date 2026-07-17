package handler  
  
import (  
	"net/http"  
  
	"github.com/gin-gonic/gin"  
	"github.com/helloworld2346/news-cms/backend/internal/auth/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/auth/mapper"  
	"github.com/helloworld2346/news-cms/backend/internal/auth/service"  
	"github.com/helloworld2346/news-cms/backend/pkg/response"  
)  
  
type AuthHandler struct{ svc service.AuthService }  
  
func NewAuthHandler(svc service.AuthService) *AuthHandler { return &AuthHandler{svc: svc} }  
  
func (h *AuthHandler) Login(c *gin.Context) {  
	var req dto.LoginRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	tokens, err := h.svc.Login(req)  
	if err != nil {  
		response.Error(c, http.StatusUnauthorized, err.Error())  
		return  
	}  
	response.OK(c, tokens)  
}  
  
func (h *AuthHandler) Refresh(c *gin.Context) {  
	var req dto.RefreshRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	tokens, err := h.svc.Refresh(req.RefreshToken)  
	if err != nil {  
		response.Error(c, http.StatusUnauthorized, err.Error())  
		return  
	}  
	response.OK(c, tokens)  
}  
  
func (h *AuthHandler) Me(c *gin.Context) {  
	userID := c.GetUint("user_id")
	user, err := h.svc.Me(userID)  
	if err != nil {  
		response.Error(c, http.StatusNotFound, "user not found")  
		return  
	}  
	response.OK(c, mapper.ToUserResponse(user))  
}