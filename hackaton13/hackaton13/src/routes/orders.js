/* eslint-disable eol-last */
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hola Order')
})

module.exports = router