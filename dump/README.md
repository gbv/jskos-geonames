## GeoName-Metrics
> Scripts to create statistical analysis of GeoName-Data

### Usage

__Order of files:__

- download.sh 
> download GeoNames dumps of individual countries (and the special file `no-country`)

- convert.sh
> This Script creates a file `languagecodes.txt`, where the first two capital letters (__AD__.zip, __AE__.zip) are extracted to. Then `languagecodes.txt` is read line-by-line and the .zip-Files in the dump will be converted to .ndjson-Files. Additionally the .ndjson-Files get validated as soon as they are converted.

- geonamesMetrics.sh
> This script reads `languagecodes.txt` line-for-line
This script takes the Path of `jskos-concept-metrics.sh` and uses it with an [A-Z][A-Z].ndjson-File.
The results are echoed in an [A-Z][A-Z].txt File
