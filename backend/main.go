package main

import (
	"encoding/json"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true // Разрешить запросы с любого источника
	},
}

func main() {
	http.HandleFunc("/ws", handleConnections)
	log.Println("http server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer ws.Close()

	// Отправка данных через WebSocket
	contacts := []string{"Контакт 1", "Контакт 2", "Контакт 3"}
	jsonMessages, err := json.Marshal(contacts)
	if err != nil {
		log.Fatal(err)
	}

	// Отправка JSON-сообщения
	if err := ws.WriteMessage(websocket.TextMessage, jsonMessages); err != nil {
		log.Println("write:", err)
	}
}
