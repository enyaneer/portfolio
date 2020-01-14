/* eslint-disable no-console */
//entry point for server JS
const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

//logging middleware
app.use(morgan('dev'))

//parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//serve up static files
app.use(express.static(path.join(__dirname, '../public')))

//api routes
app.use('/api', require('../api'))

app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public'))
})

//set up port to listen on
const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log(`Hello, I'll be your server for the evening.
  From our selection I recommend listening in on some fine port ${PORT}`)
})

app.use(function(err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
