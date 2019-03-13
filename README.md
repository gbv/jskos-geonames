# jskos-geonames

> Convert GeoNames into JSKOS format

This script converts [GeoNames data dumps](https://www.geonames.org/export/) into [JSKOS format](https://gbv.github.io/jskos/).

## Install

~~~
git clone https://github.com/gbv/jskos-geonames.git
cd jskos-geonames
npm install
~~~

## Usage

GeoNames dumps are expected to be in directory `dump`.
To download all country files and the hierarchy file:

~~~
cd dump
./download.sh
~~~

~~~
cd dump
wget -N http://download.geonames.org/export/dump/NZ.zip
~~~

To also download the hierarchy dump:

~~~
cd dump
./hierarchy.sh
~~~

To convert an individual file:

~~~
./geonames.js dump/NZ.zip dump/hierarchy.csv > dump/NZ.ndjson
~~~

By default the converted file will include:

* `uri`
* `prefLabel` (with language code `en`)
* `altLabel` (with language code `und`)
* `location` (as Point)
* `type` (including types from GeoNames ontology)
* `modified`

To include hierarchy data, pass file `hierarchy.csv` as second argument.

## TODO

* Include language codes of alternative labels
* Include tree hierarchy
* extract type hierarchy from [GeoNames ontology](http://www.geonames.org/ontology/documentation.html).

