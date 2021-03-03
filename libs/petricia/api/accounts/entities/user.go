package entities

import (
	"time"

	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/enums"
)

// User Entity
type User struct {
	ID        string     `json:"id"`
	Firstname string     `json:"firstname"`
	Lastname  string     `json:"lastname"`
	Username  string     `json:"username"`
	Email     string     `json:"email"`
	Password  string     `json:"password"`
	Role      enums.Role `json:"role"`
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `json:"deletedAt"`
}

// IsEntity user
func (User) IsEntity() {}
