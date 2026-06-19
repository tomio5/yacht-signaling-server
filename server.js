process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err)
})
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION:', err)
})

console.log('starting server.js...')

const { PeerServer } = require('peer')

console.log('peer module loaded')

const port = process.env.PORT || 9000

try {
  const peerServer = PeerServer({
    port,
    path: '/',
  })

  peerServer.on('connection', (client) => {
    console.log('client connected:', client.getId())
  })

  console.log(`PeerJS server listening setup done, port ${port}`)
} catch (err) {
  console.error('FAILED TO START PEERSERVER:', err)
}