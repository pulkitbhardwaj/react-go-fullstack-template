package auth

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

// CreateAccessToken for login
func CreateAccessToken(id string) (string, error) {
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    id,
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), // 1 Day
	})

	return claims.SignedString([]byte(sessionSecret))

}
