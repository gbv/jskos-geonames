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

For instance convert the country file of New Zealand:

~~~
cd dump
wget -N http://download.geonames.org/export/dump/NZ.zip
../geonames.js NZ.zip > NZ.ndjson
~~~

## TODO

* Include language codes of alternative labels
* Include tree hierarchy
* extract type hierarchy from [GeoNames ontology](http://www.geonames.org/ontology/documentation.html).

