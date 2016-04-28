const fs = require('fs')
const slackin = require('slackin')

try {
  var env = require('./env.js')
} catch(e) {
  var env = process.env
}

slackin.default({
  token: env.SLACK_API_KEY,
  interval: 1000,
  org: 'dxe',
}).listen(env.PORT || 3000)
