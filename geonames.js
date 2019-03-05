#!/usr/bin/env node

const geonames = require('geonames-stream')
const filter = require('./lib/filter')
const geonames2jskos = require('./lib/geonames2jskos')
const { ndjson, input } = require('./lib/io')

const args = process.argv.slice(2)

if (!args.length) {
  console.error("Usage: geonames.js URL|file [URL|file]")
  process.exit(1)
}

input(args[0])
  .pipe( geonames.pipeline )
  .pipe( filter(geonames2jskos) )
  .pipe( ndjson )
  .pipe( process.stdout )
