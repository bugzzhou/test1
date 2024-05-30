package client

import (
	"bufio"
	"fmt"
	"net"
	"time"
)

var SendServerMsgChan = make(chan string, 100)

func SendMsgToServer() {
	conn, err := net.Dial("tcp", "localhost:8080")
	if err != nil {
		fmt.Println("Error connecting to server:", err)
		return
	}
	defer conn.Close()
	fmt.Println("Connected to server")

	writer := bufio.NewWriter(conn)

	// ticker := time.NewTicker(time.Second)
	for {
		select {
		case msg := <-SendServerMsgChan:
			sendToServer(writer, msg)
		default:
			time.Sleep(3 * time.Second)
			fmt.Printf("nothing to send, sleep 3s...\n")
		}
	}

}

func sendToServer(writer *bufio.Writer, message string) {
	_, err := writer.WriteString(message + "\n")
	if err != nil {
		fmt.Println("Error sending message:", err)
		return
	}

	err = writer.Flush()
	if err != nil {
		fmt.Println("Error flushing buffer:", err)
		return
	}
	fmt.Println("Message sent successfully")
}

func SendMsgToChann() {
	for {
		time.Sleep(3 * time.Second)
		SendServerMsgChan <- "aabbcc"
	}
}
