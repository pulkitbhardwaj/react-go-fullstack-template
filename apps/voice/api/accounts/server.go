package main

import (
	"log"
	"net/http"
	"os"

	"github.com/pulkitbhardwaj/incroy/libs/voice/api/accounts/server"
)

const defaultPort = "4001"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, server.New()))
}
