package dataloaders

import (
	"context"

	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/database"
)

const loadersKey = "dataloaders"

// From Request Context
func From(ctx context.Context) *DataLoader {
	return ctx.Value(loadersKey).(*DataLoader)
}

// To context with Dataloader
func To(ctx context.Context, db *database.Database) context.Context {
	return context.WithValue(ctx, loadersKey, NewDataLoader(db))
}
