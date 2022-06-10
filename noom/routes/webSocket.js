import WebSocket from 'ws'

module.exports = function(_server) {
    function handleConnection(socket) {
        console.log(socket)
    }

    // 웹소켓 서버를 생성
    const wss = new WebSocket.Server({ server:_server })

    // 클라이언트가 접속했을 때 처리하는 이벤트 메소드 연결
    wss.on('connection', (ws, req) => {
        console.log("Connected to Browser ✅")
        // 클라이언트에 메시지보내기
        ws.send("Hello Browser!")

        // 사용자의 ip를 파악
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
        console.log(`${ip} 아이피의 클라이언트로부터 접속 요청이 있었습니다.`)

        // 메시지를 받은 경우 호출되는 이벤트 메소드
        ws.on('message', (message) => {
            // 받은 메시지를 출력
            console.log(`${ip} 로부터 받은 메시지 : ${message}`)

            // 클라이언트에 받은 메시지를 그대로 보내, 통신이 잘 되고 있는지 확인
            ws.send(`echo: ${message}`)
        })
        // 오류가 발생한 경우 호출되는 이벤트 메소드
        ws.on('error', (erorr) => {
            console.log(`${ip} 클라이언트와 연결중 오류 발생: ${error}`)
        })

        // 접속이 종료되면 호출되는 이벤트 메소드
        ws.on('close', () => {
            console.log(`Disconnected from Client ${ip} ❌`)
        })
    })
}