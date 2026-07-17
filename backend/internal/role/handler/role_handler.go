package handler  
  
import (  
	"net/http"  
	"strconv"  
  
	"github.com/gin-gonic/gin"  
	"github.com/helloworld2346/news-cms/backend/internal/role/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/role/service"  
	"github.com/helloworld2346/news-cms/backend/pkg/response"  
)  
  
type RoleHandler struct{ svc service.RoleService }  
  
func NewRoleHandler(svc service.RoleService) *RoleHandler { return &RoleHandler{svc: svc} }  
  
func (h *RoleHandler) List(c *gin.Context) {  
	items, err := h.svc.List()  
	if err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, items)  
}  
  
func (h *RoleHandler) Create(c *gin.Context) {  
	var req dto.CreateRoleRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	res, err := h.svc.Create(req)  
	if err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, res)  
}  
  
func (h *RoleHandler) Update(c *gin.Context) {  
	id, _ := strconv.ParseUint(c.Param("id"), 10, 64)  
	var req dto.UpdateRoleRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	res, err := h.svc.Update(uint(id), req)  
	if err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, res)  
}  
  
func (h *RoleHandler) Delete(c *gin.Context) {  
	id, _ := strconv.ParseUint(c.Param("id"), 10, 64)  
	if err := h.svc.Delete(uint(id)); err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, gin.H{"deleted": id})  
}  
  
func (h *RoleHandler) AssignPermissions(c *gin.Context) {  
	id, _ := strconv.ParseUint(c.Param("id"), 10, 64)  
	var req dto.AssignPermissionsRequest  
	if err := c.ShouldBindJSON(&req); err != nil {  
		response.Error(c, http.StatusBadRequest, err.Error())  
		return  
	}  
	res, err := h.svc.AssignPermissions(uint(id), req.PermissionIDs)  
	if err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, res)  
}