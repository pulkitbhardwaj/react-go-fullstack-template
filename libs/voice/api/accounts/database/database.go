package database

import (
	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/entities"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Database state
type Database struct {
	UserService *UserService
}

// Connect to database
func Connect() *Database {
	dsn := "host=localhost user=postgres password=root dbname=voice port=5433 sslmode=disable TimeZone=Asia/Shanghai"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Couldnt connect to database")
	}

	var tables []interface{}

	tables = append(
		tables,
		&entities.User{},
	)

	db.Migrator().DropTable(tables...)

	db.Migrator().AutoMigrate(tables...)

	return &Database{
		UserService: NewUserService(db),
	}
}
