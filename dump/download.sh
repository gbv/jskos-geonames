#!/bin/bash
#Dieses Skript lädt die ZIP-Dateien der GeoNames-Länder herunter und speichert sie, die Extra-Dateien hierarchie.zip und no-country.zip wurden hinzugefügt. XX.zip existiert nicht(?), daher wird sie nicht mitbeachtet

curl -s http://download.geonames.org/export/dump/ | grep -o '[A-Z][A-Z]\.zip' | grep -v '[X][X]\.zip' | uniq > files.txt
echo hierarchy.zip >> files.txt
echo no-country.zip >> files.txt

while IFS='' read -r filename || [[ -n "$filename" ]]; do 
  wget -N http://download.geonames.org/export/dump/$filename
done < files.txt


