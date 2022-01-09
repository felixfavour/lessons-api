const express = require('express')
const lessons = require('./static/lessons')
const app = express()
const port = 3000

// Routes
app.get('/lessons', function(request, response) {
  return response.json(lessons)
})

app.listen(port)
console.log(`App is currently hosted on port: ${port}`)
