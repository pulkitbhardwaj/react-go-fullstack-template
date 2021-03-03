package database

import (
	"strings"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/inputs"
	"golang.org/x/crypto/bcrypt"
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
func (s *UserService) FindByID(id string) (*entities.User, error) {
	user := new(entities.User)

	if err := s.db.Where("id = ?", id).First(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// FindByUsername returns a user based on username
func (s *UserService) FindByUsername(username string) (*entities.User, error) {
	user := new(entities.User)

	if err := s.db.Where("username = ?", username).First(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// FindByEmail returns a user based on username
func (s *UserService) FindByEmail(email string) (*entities.User, error) {
	user := new(entities.User)

	if err := s.db.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// FindByUsernameOrEmail returns a user based on username
func (s *UserService) FindByUsernameOrEmail(usernameOrEmail string) (*entities.User, error) {
	user := new(entities.User)

	if strings.Contains(usernameOrEmail, "@") {

		if err := s.db.Where("email = ?", usernameOrEmail).First(&user).Error; err != nil {
			return nil, err
		}

	} else {

		if err := s.db.Where("username = ?", usernameOrEmail).First(&user).Error; err != nil {
			return nil, err
		}

	}

	return user, nil
}

// FindByIDs returns users for the given ids
func (s *UserService) FindByIDs(ids []string) ([]*entities.User, error) {
	var (
		placeholders = make([]string, len(ids))
		args         = make([]interface{}, len(ids))
		users        = make([]*entities.User, len(ids))
	)

	for i, id := range ids {
		placeholders[i] = "?"
		args[i] = id
	}

	if err := s.db.
		Where("id IN ("+strings.Join(placeholders, ",")+")", args...).
		Find(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

// FindAll returns all the users
func (s *UserService) FindAll() ([]*entities.User, error) {
	var users []*entities.User

	if err := s.db.Find(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

// Create user
func (s *UserService) Create(input inputs.NewUser) (*entities.User, error) {
	password, err := bcrypt.GenerateFromPassword(
		[]byte(input.Password),
		bcrypt.DefaultCost,
	)
	if err != nil {
		return nil, err
	}

	// Create record to insert into database
	user := &entities.User{
		Firstname: input.Firstname,
		Lastname:  input.Lastname,
		Username:  input.Username,
		Email:     input.Email,
		Password:  string(password),
	}

	// Insert the record into database
	if err := s.db.Create(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// Update user
func (s *UserService) Update(id string, input inputs.EditUser) (*entities.User, error) {
	// Create record to insert into database
	user := &entities.User{
		Firstname: input.Firstname,
		Lastname:  input.Lastname,
		Username:  input.Username,
		Email:     input.Email,
	}

	// Insert the record into database
	if err := s.db.Create(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

// Delete user
func (s *UserService) Delete(id string) (bool, error) {
	// Insert the record into database
	// if err := s.db.Create(&user).Error; err != nil {
	// 	return nil, err
	// }

	return true, nil
}

// Validate user
func (s *UserService) Validate(input inputs.LoginCredentials) (*entities.User, error) {
	user, err := s.FindByUsernameOrEmail(input.UsernameOrEmail)
	if err != nil {
		return nil, err
	}

	if err := bcrypt.CompareHashAndPassword(
		[]byte(user.Password),
		[]byte(input.Password),
	); err != nil {
		return nil, err
	}

	return user, nil
}
