package entities

import (
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/enums"
	"gorm.io/gorm"
)

// User Entity
type User struct {
	*gorm.Model
	Firstname string     `json:"firstname"`
	Lastname  string     `json:"lastname"`
	Username  string     `json:"username"`
	Email     string     `json:"email"`
	Password  string     `json:"password"`
	Role      enums.Role `json:"role"`
}

// IsEntity user
func (User) IsEntity() {}
