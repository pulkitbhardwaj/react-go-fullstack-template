package database

import (
	"strings"

	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/petricia/api/accounts/inputs"
	"gorm.io/gorm"
)

// UserService to get Users fromm database
type UserService struct {
	db *gorm.DB
}

// NewUserService creates and returns a user repository
func NewUserService(db *gorm.DB) *UserService {
	return &UserService{db: db}
}

// FindByID returns a user based on ID
func (r *UserService) FindByID(id string) (*entities.User, error) {
	user := new(entities.User)

	if err := r.db.Where("id = ?", id).First(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// FindByIDs returns users for the given ids
func (r *UserService) FindByIDs(ids []string) ([]*entities.User, error) {
	var (
		placeholders = make([]string, len(ids))
		args         = make([]interface{}, len(ids))
		users        = make([]*entities.User, len(ids))
	)

	for i, id := range ids {
		placeholders[i] = "?"
		args[i] = id
	}

	if err := r.db.
		Where("id IN ("+strings.Join(placeholders, ",")+")", args...).
		Find(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

// FindAll returns all the users
func (r *UserService) FindAll() ([]*entities.User, error) {
	var users []*entities.User

	if err := r.db.Find(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

// Create user
func (r *UserService) Create(input inputs.NewUser) (*entities.User, error) {
	// Create record to insert into database
	user := &entities.User{
		Firstname: input.Firstname,
		Lastname:  input.Lastname,
		Username:  input.Username,
		Email:     input.Email,
		Password:  input.Password,
	}

	// Insert the record into database
	if err := r.db.Create(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// Update user
func (r *UserService) Update(id string, input inputs.EditUser) (*entities.User, error) {
	// Create record to insert into database
	user := &entities.User{
		Firstname: input.Firstname,
		Lastname:  input.Lastname,
		Username:  input.Username,
		Email:     input.Email,
	}

	// Insert the record into database
	if err := r.db.Create(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// Delete user
func (r *UserService) Delete(id string) (bool, error) {
	// Insert the record into database
	// if err := r.db.Create(&user).Error; err != nil {
	// 	return nil, err
	// }

	return true, nil
}
