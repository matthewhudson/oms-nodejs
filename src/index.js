#!/usr/bin/env node

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 8080

app.post('/message', urlencodedParser, (req, res) => {
  const { name } = req.body
  res.json({ message: `Hello ${name}` })
})

app.get('/health', (req, res) => res.send('OK'))

app.listen(port, () => console.log(`Listening on localhost: ${port}!`))
