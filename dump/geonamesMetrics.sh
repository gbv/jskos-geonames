#!/bin/bash
#This script reads languagecodes.txt line-for-line
#This script takes the Path of jskos-concept-metrics and uses it with an [A-Z][A-Z].ndjson-File.
#The results are echoed in [A-Z][A-Z].txt File

#Pfad mit einer Executable-Datei
METRICS="$1"
if [ ! -x "$METRICS" ]; then
	echo Die Datei ist nicht ausführbar. Pfad von jskos-concept-metrics.sh benötigt
	exit 
fi

#$METRICS=Pfad von jskos-concept-metrics.sh
while IFS='' read -r code || [[ -n "$code" ]]; do
    $METRICS $code.ndjson > $code.txt
    echo "$code.ndjson -> $code.txt"
done < "languagecodes.txt"

