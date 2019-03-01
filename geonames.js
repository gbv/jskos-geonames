#!/usr/bin/env node

const geonames = require('geonames-stream')
const request = require('request')
const fs = require('fs')
const filter = require('./lib/filter')
const geonames2jskos = require('./lib/geonames2jskos')

const args = process.argv.slice(2)

if (!args.length) {
  console.error("Usage: geonames.js URL|file")
  process.exit(1)
}

const source = args[0].match(/^https?:/)
    ? request.get(args[0]) : fs.createReadStream(args[0])
   
source.pipe( geonames.pipeline )
  .pipe( filter(geonames2jskos) )
  .pipe( geonames.stringify )
  .pipe( process.stdout )
