#!/bin/bash
#Dieses Skript erstellt eine Datei languagecodes.txt, zu der die ersten beiden Großbuchstaben (AD.zip, AE.zip, ...) aus files.txt extrahiert werden. Dann wird languagecodes.txt line-for-line gelesen und die ZIP-Dateien im dump zu NDJSON-Dateien konvertiert.

grep -o '[A-Z][A-Z]' files.txt > languagecodes.txt

while IFS='' read -r code || [[ -n "$code" ]]; do
    ../geonames.js $code.zip hierarchy.sh > $code.ndjson
	jskos-validate $code.ndjson
	echo $code.ndjson
done < "languagecodes.txt"




