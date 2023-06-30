const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ test: 'in router'})
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  res.json({ test2: id})
})

router.post('/', (req, res) => {
  const data = req.body
  res.json({ post: data})
})

module.exports = router
