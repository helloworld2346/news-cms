package entity  
  
import "time"  
  
type User struct {  
	ID           uint      `gorm:"primaryKey" json:"id"`  
	Username     string    `gorm:"uniqueIndex;size:64;not null" json:"username"`  
	Email        string    `gorm:"uniqueIndex;size:128" json:"email"`  
	FullName     string    `gorm:"size:128" json:"full_name"`  
	PasswordHash string    `gorm:"not null" json:"-"`  
	IsActive     bool      `gorm:"default:true" json:"is_active"`  
	CreatedAt    time.Time `json:"created_at"`  
	UpdatedAt    time.Time `json:"updated_at"`  
}  
  
func (User) TableName() string { return "users" }