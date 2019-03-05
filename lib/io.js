const filter = require('./filter')
const request = require('request')
const fs = require('fs')

// don't complain if STDOUT is closed for instance with `head`
process.stdout.on('error', err => {
  if (err.code == "EPIPE") {
    process.exit(0)
  }
})

// serialize as NDJSON
const ndjson = filter(obj => JSON.stringify(obj) + "\n")

// read stream from URL or file
const input = src => src.match(/^https?:/)
  ? request.get(src) : fs.createReadStream(src)
 
module.exports = { ndjson, input }
