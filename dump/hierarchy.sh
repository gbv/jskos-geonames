#!/bin/bash

# Download and process GeoNames hierarchy dump
wget -N http://download.geonames.org/export/dump/hierarchy.zip
zcat hierarchy.zip | awk '{print $1","$2}' > hierarchy.csv

