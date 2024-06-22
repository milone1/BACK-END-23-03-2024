require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server)
require('./sockets/socket')

server.listen(process.env.PORT, (err) => {
  if(err) throw new Error(error)
    console.log('The socket server is running on port', process.env.PORT)
})