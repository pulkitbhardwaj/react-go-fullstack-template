package server

import (
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/database"
	"github.com/rs/cors"
)

// graphQLServer state
type graphQLServer struct {
	router *mux.Router
	db     *database.Database
}

func (s *graphQLServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

func (s *graphQLServer) initialize() http.Handler {
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:4200"},
		AllowCredentials: true,
		// Enable Debugging for testing, consider disabling in production
		Debug: true,
	})

	return c.Handler(handlers.LoggingHandler(os.Stdout, s))
}

func (s *graphQLServer) applyMiddleware() {
	s.router.Use(s.sessionMiddleware)
	s.router.Use(s.authMiddleware)
	s.router.Use(s.dataloaderMiddleware)

	s.router.HandleFunc("/", s.handlePlayground()).Methods("GET")
	s.router.HandleFunc("/", s.handleRequest()).Methods("POST")
}

// New creates a new Server
func New() http.Handler {

	db := database.Connect()

	s := &graphQLServer{
		router: mux.NewRouter(),
		db:     db,
	}

	s.applyMiddleware()

	return s.initialize()
}
