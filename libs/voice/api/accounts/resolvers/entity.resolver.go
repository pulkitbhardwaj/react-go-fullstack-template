package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/graph"
	"gorm.io/gorm"
)

func (r *entityResolver) FindUserByID(ctx context.Context, id string) (*entities.User, error) {
	userID, err := strconv.Atoi(id)
	if err != nil {
		return nil, err
	}

	return &entities.User{
		Model: &gorm.Model{
			ID: uint(userID),
		},
	}, nil
}

// Entity returns graph.EntityResolver implementation.
func (r *Resolver) Entity() graph.EntityResolver { return &entityResolver{r} }

type entityResolver struct{ *Resolver }
