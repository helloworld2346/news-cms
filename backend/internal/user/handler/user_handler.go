package handler  
  
import (  
	"net/http"  
	"strconv"  
  
	"github.com/gin-gonic/gin"  
  
	"github.com/helloworld2346/news-cms/backend/internal/user/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/user/service"  
	"github.com/helloworld2346/news-cms/backend/pkg/response"  
)  
  
type UserHandler struct {  
	svc service.UserService  
}  
  
func NewUserHandler(svc service.UserService) *UserHandler {  
	return &UserHandler{svc: svc}  
}  
  
func (h *UserHandler) List(c *gin.Context) {  
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))  
	pageSize, _ := strconv.Atoi(c.DefaultQuery("page_size", "20"))  
  
	users, total, err := h.svc.List(page, pageSize)  
	if err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, gin.H{  
		"items":     users,  
		"total":     total,  
		"page":      page,  
		"page_size": pageSize,  
	})  
}  
  
// POST /api/v1/users  
func (h *UserHandler) Create(c *gin.Context) {  
	var req dto.CreateUserRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	user, err := h.svc.Create(req)
	if err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	response.OK(c, user)  
}  
  
// PUT /api/v1/users/:id  
func (h *UserHandler) Update(c *gin.Context) {  
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)  
	if err != nil {  
		response.Error(c, http.StatusBadRequest, "invalid user id")  
		return  
	}  
	var req dto.UpdateUserRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	user, err := h.svc.Update(uint(id), req) 
	if err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	response.OK(c, user)  
}  
  
// DELETE /api/v1/users/:id  
func (h *UserHandler) Delete(c *gin.Context) {  
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)  
	if err != nil {  
		response.Error(c, http.StatusBadRequest, "invalid user id")  
		return  
	}  
	if err := h.svc.Delete(uint(id)); err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, gin.H{"deleted": id})  
}  
  
func (h *UserHandler) AssignRoles(c *gin.Context) {  
	id, err := strconv.ParseUint(c.Param("id"), 10, 64)  
	if err != nil {  
		response.Error(c, http.StatusBadRequest, "invalid user id")  
		return  
	}  
	var req dto.AssignRolesRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	user, err := h.svc.AssignRoles(uint(id), req.RoleIDs)  
	if err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	response.OK(c, user)  
}