package dataloaders

import (
	"time"

	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/database"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/entities"
)

// DataLoader for entities
type DataLoader struct {
	UserByID *UserLoader
	// Users *UserSliceLoader
}

// NewDataLoader returns a new dataloader
func NewDataLoader(db *database.Database) *DataLoader {
	return &DataLoader{
		// User DataLoader
		UserByID: NewUserLoader(UserLoaderConfig{
			MaxBatch: 100,
			Wait:     1 * time.Millisecond,
			Fetch: func(ids []string) ([]*entities.User, []error) {
				var (
					err      error
					errs     []error
					res      []*entities.User
					users    = make([]*entities.User, len(ids))
					userByID = make(map[string]*entities.User, len(ids))
				)

				res, err = db.UserService.FindByIDs(ids)
				if err != nil {
					errs = append(errs, err)
					return nil, errs
				}

				for _, user := range res {
					userByID[user.ID] = user
				}

				for i, id := range ids {
					users[i] = userByID[id]
				}

				return users, nil
			},
		}),
	}
}
