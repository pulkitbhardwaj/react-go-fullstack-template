package server

import (
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/auth"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/dataloaders"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/graph"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/resolvers"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/session"
)

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

func (s *graphQLServer) authMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		r = r.WithContext(auth.ToContext(r, s.db))

		next.ServeHTTP(w, r)
	})
}

func (s *graphQLServer) sessionMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		store := session.NewStore(r, w)
		r = r.WithContext(session.ToContext(r, w, store))

		next.ServeHTTP(w, r)
	})
}

func (s *graphQLServer) dataloaderMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		r = r.WithContext(dataloaders.ToContext(r.Context(), s.db))

		next.ServeHTTP(w, r)
	})
}
