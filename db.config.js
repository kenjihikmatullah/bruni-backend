const mongoose = require('mongoose')

// Prepare connection
const HOST = '172.19.0.4'
const USERNAME = 'kenji'
const PASSWORD = 'kenji-X456UR'
const DATABASE = 'bruni'
const URI = `mongodb://${HOST}:27017/${DATABASE}`

// Connect
mongoose.connect(URI, {
  auth: {
    authSource: 'admin'
  },
  'user': USERNAME,
  'pass': PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection