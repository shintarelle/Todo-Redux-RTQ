const express = require('express')
const app = express()
const port = 3000

const testRoute = require('./testRoute')

function customMiddleware(req, res, next) {
  console.log('log',req.query, req.method)
  next()
}
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(customMiddleware)

app.use('/api', testRoute)

// app.get('/', (req, res) => {
//   // console.log('req res', req, res)
//   res.json({ test: 'Now we are in get, json)'})
// })
// app.get('/:id', (req, res) => {
//   const {id} = req.params
//   // console.log('req params', req.params)
//   res.json({ test: id})
// })

// app.post('/', (req, res) => {
//   res.send('Now we are in  method post')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
