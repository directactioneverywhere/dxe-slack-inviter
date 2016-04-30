const fs = require('fs')
const slackin = require('slackin')

// Use local environment if it exists,
// otherwise, use the OS environment
try {
  var env = require('./env.js')
} catch(e) {
  var env = process.env
}

const PORT = env.PORT || 3000

slackin.default({
  token: env.SLACK_API_KEY,
  interval: 1000,
  org: 'dxe',
}).listen(PORT)

console.log(`Listening on http://localhost:${PORT}...`)
