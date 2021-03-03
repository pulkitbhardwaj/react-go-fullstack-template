package dataloaders

import (
	"context"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/database"
)

const loadersKey = "dataloaders"

// For Request Context
func For(ctx context.Context) *DataLoader {
	return ctx.Value(loadersKey).(*DataLoader)
}

// ToContext with Dataloader
func ToContext(ctx context.Context, db *database.Database) context.Context {
	return context.WithValue(ctx, loadersKey, newDataLoader(db))
}
