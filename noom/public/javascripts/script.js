const socket = new WebSocket(`ws://${window.location.host}`)

// 서버가 응답했을 때 클라이언트에서 보여줄 메시지
socket.addEventListener("open", () => {
    console.log("Connected to Server ✅")
})

socket.addEventListener("message", (message) => {
    console.log(`Message from Server: ${message.data}`)
})

socket.addEventListener("close", () => {
    console.log("Disconnected to Server ❌")
})

// 실행하고 3초 뒤에 서버에 메시지보내기
setTimeout(() => {
    socket.send("Hello Server!")
}, 3000)