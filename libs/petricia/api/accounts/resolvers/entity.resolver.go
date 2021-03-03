package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/graph"
)

func (r *entityResolver) FindUserByID(ctx context.Context, id string) (*entities.User, error) {
	panic(fmt.Errorf("not implemented"))
}

// Entity returns graph.EntityResolver implementation.
func (r *Resolver) Entity() graph.EntityResolver { return &entityResolver{r} }

type entityResolver struct{ *Resolver }
