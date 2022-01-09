const express = require('express')

const lessons = require('./static/lessons')
const user = require('./static/user')

const app = express()
const port = 3000

// Routes
// GET request to retrieve all lessons
app.get('/lessons', function(request, response) {
  return response.json(lessons)
})

// GET request to retrieve User
app.get('/user', function(request, response) {
  return response.json(user)
})

app.listen(port)
console.log(`App is currently hosted on port: ${port}`)
