package main

import (
	"fmt"
	"net/http"
)

func wsHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Header)
	fmt.Println(w, "Hello world")

}
func main() {
	http.HandleFunc("/", wsHandler)
	http.ListenAndServe("localhost:8080", nil)

}
