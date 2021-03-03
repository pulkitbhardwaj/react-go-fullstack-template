package server

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/database"
)

// graphQLServer state
type graphQLServer struct {
	router *mux.Router
	db     *database.Database
}

func (s *graphQLServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

// New creates a new Server
func New() http.Handler {

	db := database.Connect()

	s := &graphQLServer{
		router: mux.NewRouter(),
		db:     db,
	}

	s.applyMiddleware()

	return s
}
