const {io} = require('../app')

const Bands = require('../models/bands')
const Band = require('../models/band')

const bands = new Bands();

bands.addBand( new Band('Breakin benjamin'))
bands.addBand( new Band('Bon jovi'))

io.on('connection', client => {
  console.log('un cliente se conectos a los WS.')

  client.emit('active-bands', bands.getBands() )

  client.on('vote-band', (payload) => {
    console.log('payload',payload)
    bands.voteBand(payload.id);
    io.emit('active-bands', bands.getBands() )
  })

  client.on('disconnect', () => {
    console.log('cliente desconectado del WS.')
  })

})