## GeoName-Metrics
> Scripts to create statistical analysis of GeoName-Data

### Usage

__Order of files:__

- download.sh 
> download GeoNames dumps of individual countries (and the special file 'no-country')

- convert.sh
> Dieses Skript erstellt eine Datei languagecodes.txt, zu der die ersten beiden Großbuchstaben (AD.zip, AE.zip, ...) aus files.txt extrahiert werden. Dann wird languagecodes.txt line-for-line gelesen und die ZIP-Dateien im dump zu NDJSON-Dateien konvertiert.
This Script creates a file 'languagecodes.txt', where the first two capital letters (__AD__.zip, __AE__.zip) are extracted to. Then 'languagecodes.txt' is read line-by-line and the .zip-Files in the dump will be converted to .ndjson-Files.

- geonamesMetrics.sh
> This script reads 'languagecodes.txt' line-for-line
This script takes the Path of 'jskos-concept-metrics.sh' and uses it with an [A-Z][A-Z].ndjson-File.
The results are echoed in an [A-Z][A-Z].txt File