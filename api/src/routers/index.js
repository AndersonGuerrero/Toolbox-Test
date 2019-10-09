// Imports
const express = require('express')

// Define consts
const router = express.Router()

router.get('/', function(req, res) {
  res.json({
    text: 'Api is working'
  })
})

router.post('/', function(req, res) {
  res.json({
    text: req.body.text
  })
})

module.exports = router