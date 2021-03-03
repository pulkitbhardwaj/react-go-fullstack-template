package session

import (
	"context"
	"net/http"
)

const sessionContextKey = "session"

// For request context after being authenticated
func For(ctx context.Context) (*Store, error) {
	return ctx.Value(sessionContextKey).(*Store), nil

}

// ToContext context with Session Store
func ToContext(r *http.Request, w http.ResponseWriter, s *Store) context.Context {
	return context.WithValue(r.Context(), sessionContextKey, s)
}
