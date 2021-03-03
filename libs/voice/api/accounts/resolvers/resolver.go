package resolvers

import (
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/database"
)

// This file will not be regenerated automatically.

// Resolver serves as dependency injection for your app, add any dependencies you require here.
type Resolver struct {
	DB *database.Database
}
