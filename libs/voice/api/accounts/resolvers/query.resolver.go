package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/auth"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/graph"
)

func (r *queryResolver) Me(ctx context.Context) (*entities.User, error) {
	return auth.For(ctx)
}

func (r *queryResolver) UserByID(ctx context.Context, id string) (*entities.User, error) {
	return r.DB.UserService.FindByID(id)
}

func (r *queryResolver) Users(ctx context.Context) ([]*entities.User, error) {
	return r.DB.UserService.FindAll()
}

// Query returns graph.QueryResolver implementation.
func (r *Resolver) Query() graph.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
