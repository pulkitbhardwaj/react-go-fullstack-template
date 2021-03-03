package enums

import (
	"fmt"
	"io"
	"strconv"
)

type Role string

const (
	RoleAdmin  Role = "ADMIN"
	RoleUser   Role = "USER"
	RoleVendor Role = "VENDOR"
)

var AllRole = []Role{
	RoleAdmin,
	RoleUser,
	RoleVendor,
}

func (e Role) IsValid() bool {
	switch e {
	case RoleAdmin, RoleUser, RoleVendor:
		return true
	}
	return false
}

func (e Role) String() string {
	return string(e)
}

func (e *Role) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Role(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Role", str)
	}
	return nil
}

func (e Role) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
