const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({response: 'ok, V3'})
  })

module.exports = router;