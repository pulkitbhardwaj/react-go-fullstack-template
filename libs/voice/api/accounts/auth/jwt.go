package auth

import (
	"fmt"
	"net/http"

	"github.com/dgrijalva/jwt-go"
	"github.com/gorilla/sessions"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/database"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/session"
)

var (
	// SessionName to name the cookies
	SessionName   = "session"
	sessionSecret = "12345"
)

func keyFunc(token *jwt.Token) (interface{}, error) {
	return []byte(sessionSecret), nil
}

func extractJWTFromCookie(s *sessions.Session) (*jwt.StandardClaims, error) {
	token, err := jwt.ParseWithClaims(
		fmt.Sprintf("%v", s.Values["uid"]),
		&jwt.StandardClaims{},
		keyFunc,
	)

	if err != nil {
		return nil, err
	}

	return token.Claims.(*jwt.StandardClaims), nil
}

func newAuthContext(r *http.Request, db *database.Database) *entities.User {
	store, err := session.For(r.Context())
	if err != nil {
		return nil
	}

	c, err := store.GetCookie(SessionName)
	if err != nil {
		return nil
	}

	token, err := extractJWTFromCookie(c)
	if err != nil {
		return nil
	}

	user, err := db.UserService.FindByID(token.Issuer)
	if err != nil {
		return nil
	}

	return user
}
