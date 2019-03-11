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


let convert = geonames2jskos

// include hierarchy
if (args[1]) {
  const hierfile = args[1]
  const Hierarchy = require('./lib/hierarchy')
  console.warn(`reading hierarchy file ${hierfile}`)
  const hier = new Hierarchy(hierfile)
  convert = rec => geonames2jskos(rec, hier)
}

const hierFile = '' //'hierarchy.csv'

input(args[0])
  .pipe( geonames.pipeline )
  .pipe( filter(convert) )
  .pipe( ndjson )
  .pipe( process.stdout )
