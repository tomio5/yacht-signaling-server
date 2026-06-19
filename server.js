javascriptconst { PeerServer } = require('peer')

const port = process.env.PORT || 9000

const peerServer = PeerServer({
  port,
  path: '/',
})

peerServer.on('connection', (client) => {
  console.log('client connected:', client.getId())
})

console.log(`PeerJS server running on port ${port}`)