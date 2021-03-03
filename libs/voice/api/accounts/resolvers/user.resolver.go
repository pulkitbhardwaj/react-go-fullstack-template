package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"
	"time"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/graph"
)

func (r *userResolver) ID(ctx context.Context, obj *entities.User) (string, error) {
	return strconv.Itoa(int(obj.ID)), nil
}

func (r *userResolver) DeletedAt(ctx context.Context, obj *entities.User) (*time.Time, error) {
	return &obj.DeletedAt.Time, nil
}

// User returns graph.UserResolver implementation.
func (r *Resolver) User() graph.UserResolver { return &userResolver{r} }

type userResolver struct{ *Resolver }
