const through2 = require('through2')

module.exports = action =>
  through2.obj(function (data, enc, callback) {
    const value = action(data)
    if (value) this.push(value)
    callback()
  })
