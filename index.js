const socket = require('nodejs-websocket')
const server = socket.createServer(function (accept) {
    console.log("New connection")
    accept.on('text', data => {
        const result = JSON.parse(data)
        console.log(`${result.user}:${result.m}`)
        server.connections.forEach(conn  => {
            conn.sendText(`${result.user}:${result.m}`)
        })
    })
    accept.on('close', (data, reason) => {
        console.log("Connection closed：", data, reason)
    })
})

server.listen(3000)