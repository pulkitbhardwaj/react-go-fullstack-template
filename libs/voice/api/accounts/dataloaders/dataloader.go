package dataloaders

import (
	"strconv"
	"time"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/database"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
)

// DataLoader for entities
type DataLoader struct {
	UserByID *UserLoader
	// Users *UserSliceLoader
}

// newDataLoader returns a new dataloader
func newDataLoader(db *database.Database) *DataLoader {
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
					userByID[strconv.Itoa(int(user.ID))] = user
				}

				for i, id := range ids {
					users[i] = userByID[id]
				}

				return users, nil
			},
		}),
	}
}
