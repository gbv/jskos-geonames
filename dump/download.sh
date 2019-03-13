#!/bin/bash

# download GeoNames dumps of individual countries (and the special file `no-country`)

curl -s http://download.geonames.org/export/dump/ | grep -o '[A-Z][A-Z]\.zip' > files.txt
echo no-country.zip >> files.txt

while IFS='' read -r filename || [[ -n "$filename" ]]; do 
  wget -N http://download.geonames.org/export/dump/$filename
done < files.txt
