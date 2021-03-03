package server

import (
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/graph"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/resolvers"
)

func (s *graphQLServer) applyMiddleware() {
	// s.router.Use(s.dataloaderMiddleware)

	s.router.HandleFunc("/", s.handlePlayground()).Methods("GET")
	s.router.HandleFunc("/", s.handleRequest()).Methods("POST")
}

//
// GraphQL Handlers
//

func (s *graphQLServer) handlePlayground() http.HandlerFunc {
	return playground.Handler("GraphQL Playground", "/")
}

func (s *graphQLServer) handleRequest() http.HandlerFunc {
	h := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{
		Resolvers: &resolvers.Resolver{
			DB: s.db,
		},
	}))

	return func(w http.ResponseWriter, r *http.Request) {
		h.ServeHTTP(w, r)
	}
}

//
// Middlewares
//

// func (s *graphQLServer) dataloaderMiddleware(next http.Handler) http.Handler {
// 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// 		r = r.WithContext(dataloader.ToContext(r.Context(), s.db))

// 		next.ServeHTTP(w, r)
// 	})
// }
