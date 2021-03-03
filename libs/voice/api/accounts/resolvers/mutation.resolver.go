package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/auth"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/graph"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/inputs"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/session"
)

func (r *mutationResolver) CreateUser(ctx context.Context, input inputs.NewUser) (*entities.User, error) {
	user, err := r.DB.UserService.Create(input)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (r *mutationResolver) UpdateUser(ctx context.Context, id string, input inputs.EditUser) (*entities.User, error) {
	user, err := auth.For(ctx)
	if err != nil {
		return nil, err
	}

	return r.DB.UserService.Update(strconv.Itoa(int(user.ID)), input)
}

func (r *mutationResolver) DeleteUser(ctx context.Context, id string) (bool, error) {
	user, err := auth.For(ctx)
	if err != nil {
		return false, err
	}

	return r.DB.UserService.Delete(strconv.Itoa(int(user.ID)))
}

func (r *mutationResolver) RegisterUser(ctx context.Context, input inputs.NewUser) (*entities.User, error) {
	user, err := r.DB.UserService.Create(input)
	if err != nil {
		return nil, err
	}

	success, err := r.LoginUser(ctx, inputs.LoginCredentials{
		UsernameOrEmail: input.Username,
		Password:        input.Password,
	})

	if !success && err != nil {
		return nil, err
	}

	return user, nil
}

func (r *mutationResolver) LoginUser(ctx context.Context, input inputs.LoginCredentials) (bool, error) {
	s, err := session.For(ctx)
	if err != nil {
		return false, err
	}

	// Find and verify user
	user, err := r.DB.UserService.Validate(input)
	if err != nil {
		return false, err
	}

	// CreateAccessToken
	token, err := auth.CreateAccessToken(strconv.Itoa(int(user.ID)))
	if err != nil {
		return false, err
	}

	// Set Cookie
	if err := s.SetCookie(&session.Cookie{
		Name: auth.SessionName,
		Values: map[interface{}]interface{}{
			"uid": token,
		},
		HTTPOnly: true,
		MaxAge:   60 * 15,
	}); err != nil {
		return false, err
	}

	return true, nil
}

// Mutation returns graph.MutationResolver implementation.
func (r *Resolver) Mutation() graph.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }
