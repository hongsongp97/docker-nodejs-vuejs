const express = require('express')
const PORT = 8081
const HOST = '0.0.0.0'

/**
 * Class Server defines routers, models and controller which are used.
 */
class Server {

  /**
   * Initialize a server with function express as a parameter.
   * @param {function} express express function - 'require('express')'
   */
  constructor(express) {
    this.server = express()
    this._setRouter()
  }

  /**
   * Set routers
   */
  _setRouter() {
    this.server.get('/', (req, res) => {
      res.send('Server is running');
    })
  }

  /**
   * Run server to listen on host:port
   * @param {number} port port number
   * @param {string} host host url
   */
  listenOn(port, host) {
    this.server.listen(port, host)
    console.log(`Running on http://${host}:${port}`)
  }
}

/**
 * Main function to run the server
 */
async function main() {
  await new Server(express).listenOn(PORT, HOST)
}

main()