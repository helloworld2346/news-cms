package entity  
  
type Role struct {  
	ID          uint         `gorm:"primaryKey" json:"id"`  
	Name        string       `gorm:"uniqueIndex;size:64;not null" json:"name"`  
	Description string       `gorm:"size:255" json:"description"`  
	Permissions []Permission `gorm:"many2many:role_permissions;" json:"permissions,omitempty"`  
}  
  
func (Role) TableName() string { return "roles" }  
  
type Permission struct {  
	ID   uint   `gorm:"primaryKey" json:"id"`  
	Code string `gorm:"uniqueIndex;size:128;not null" json:"code"`  
	Name string `gorm:"size:255" json:"name"`  
}  
  
func (Permission) TableName() string { return "permissions" }