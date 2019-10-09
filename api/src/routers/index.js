// Imports
const express = require('express')

// Define consts
const router = express.Router()

router.get('/portafolio', function(req, res) {
  res.json({
    text: 'OmegaSoft C.A, MasPublicidad, Centria S.A'
  })
})

router.get('/acerca', function(req, res) {
  res.json({
    text: 'Desarrollador Full-Stack'
  })
})

router.get('/contacto', function(req, res) {
  res.json({
    text: 'aguerrero@gmail.com'
  })
})

module.exports = router