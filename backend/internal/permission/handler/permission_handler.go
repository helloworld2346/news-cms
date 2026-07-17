package handler  
  
import (  
	"net/http"  
	"strconv"  
  
	"github.com/gin-gonic/gin"  
	"github.com/helloworld2346/news-cms/backend/internal/permission/dto"  
	"github.com/helloworld2346/news-cms/backend/internal/permission/service"  
	"github.com/helloworld2346/news-cms/backend/pkg/response"  
)  
  
type PermissionHandler struct{ svc service.PermissionService }  
  
func NewPermissionHandler(svc service.PermissionService) *PermissionHandler {  
	return &PermissionHandler{svc: svc}  
}  
  
func (h *PermissionHandler) List(c *gin.Context) {  
	items, err := h.svc.List()  
	if err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, items)  
}  
  
func (h *PermissionHandler) Create(c *gin.Context) {  
	var req dto.CreatePermissionRequest  
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
  
func (h *PermissionHandler) Update(c *gin.Context) {  
	id, _ := strconv.ParseUint(c.Param("id"), 10, 64)  
	var req dto.UpdatePermissionRequest  
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
  
func (h *PermissionHandler) Delete(c *gin.Context) {  
	id, _ := strconv.ParseUint(c.Param("id"), 10, 64)  
	if err := h.svc.Delete(uint(id)); err != nil {  
		response.Error(c, http.StatusInternalServerError, err.Error())  
		return  
	}  
	response.OK(c, gin.H{"deleted": id})  
}