package session

import (
	"fmt"
	"net/http"

	"github.com/gorilla/sessions"
)

// Cookie Configuration
type Cookie struct {
	Name     string
	Values   map[interface{}]interface{}
	MaxAge   int
	Secure   bool
	HTTPOnly bool
}

// Store for sessions
type Store struct {
	req     *http.Request
	res     http.ResponseWriter
	cookies *sessions.CookieStore
}

// GetCookie creates a cookie with the given configuration
func (s *Store) GetCookie(name string) (*sessions.Session, error) {
	c, err := s.cookies.Get(s.req, name)
	if err != nil {
		return nil, err
	}

	fmt.Println("Getting Cookie", c)

	return c, nil
}

// SetCookie creates a cookie with the given configuration
func (s *Store) SetCookie(c *Cookie) error {
	session, err := s.cookies.Get(s.req, c.Name)
	if err != nil {
		return err
	}

	session.Values = c.Values

	session.Options.Secure = c.Secure
	session.Options.MaxAge = c.MaxAge
	session.Options.HttpOnly = c.HTTPOnly

	if err := session.Save(s.req, s.res); err != nil {
		return err
	}

	fmt.Println("Cookie Created ", session.Values["uid"])

	return nil
}

// NewStore creates a store for sessions
func NewStore(r *http.Request, w http.ResponseWriter) *Store {
	store := sessions.NewCookieStore([]byte("mystore"))
	store.Options = &sessions.Options{
		MaxAge:   60 * 15,
		HttpOnly: true,
	}

	return &Store{
		req:     r,
		res:     w,
		cookies: store,
	}
}
