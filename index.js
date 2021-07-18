const express = require('express')
const connection = require('./db.config')

const app = express()

// Connect to database
connection.once('open', () => console.log('Connected to database'))
connection.on('error', e => console.log(`Failed to connect to database: ${e.message}`))

// Routes
app.use(express.json({
  extended: false
}))
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Started on port ${PORT}`))