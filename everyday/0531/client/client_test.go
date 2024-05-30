package client

import (
	"testing"
)

func TestGetClient(t *testing.T) {
	go SendMsgToChann()

	go func() {
		SendMsgToServer()
	}()

	select {}
}

// func sendMany() {
// 	time.Sleep(3 * time.Second)
// 	msg := "aaa"
// 	SendMsgToServer(msg)
// }
