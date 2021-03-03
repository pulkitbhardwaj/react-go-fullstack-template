package auth

import (
	"context"
	"fmt"
	"net/http"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/database"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
)

const authKey = "auth"

// For request context after being authenticated
func For(ctx context.Context) (*entities.User, error) {
	v := ctx.Value(authKey)

	if v == nil {
		return nil, fmt.Errorf("Not Authenticated")
	}

	return v.(*entities.User), nil
}

// ToContext context with Dataloader
func ToContext(r *http.Request, db *database.Database) context.Context {
	return context.WithValue(r.Context(), authKey, newAuthContext(r, db))
}
