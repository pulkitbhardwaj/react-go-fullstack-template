package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/graph"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/inputs"
)

func (r *mutationResolver) CreateUser(ctx context.Context, input inputs.NewUser) (*entities.User, error) {
	return r.DB.UserService.Create(input)
}

func (r *mutationResolver) UpdateUser(ctx context.Context, id string, input inputs.EditUser) (*entities.User, error) {
	return r.DB.UserService.Update(id, input)
}

func (r *mutationResolver) DeleteUser(ctx context.Context, id string) (bool, error) {
	return r.DB.UserService.Delete(id)
}

// Mutation returns graph.MutationResolver implementation.
func (r *Resolver) Mutation() graph.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }
