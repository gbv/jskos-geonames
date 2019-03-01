const geonamesFields = [
  '_id',
  'name', 'asciiname', // 'alternatnames',
  'latitude', 'longitude', 'elevation',
  'country_code', 'cc2',
  // 'admin1_code', 'admin2_code', 'admin3_code', 'admin4_code', // hierachy
  'modification_date',
  'timezone',
  'population',

  // 'feature_class' : see http://www.geonames.org/export/codes.html, char(1)
  // 'feature_code' : see http://www.geonames.org/export/codes.html, varchar(10)
  // 'dem' : digital elevation model, srtm3 or gtopo30, average elevation of 3''x3'' (ca 90mx90m) or 30''x30'' (ca 900mx900m) area in meters, integer. srtm processed by cgiar/ciat.
]

// TODO: use GeoNames ontology (RDF)

module.exports = rec => {

  rec.uri = `http://sws.geonames.org/${rec._id}/`
  rec.prefLabel = { en: rec.name }

  // TODO: alternatnames
  // Remark : the field 'alternatenames' in the table 'geoname' is a short version of the 'alternatenames' table without links and postal codes but with ascii transliterations. You probably don't need both. 
  // If you don't need to know the language of a name variant, the field 'alternatenames' will be sufficient. If you need to know the language
  // of a name variant, then you will need to load the table 'alternatenames' and you can drop the column in the geoname table.

  rec.modified = rec.modification_date

  rec.location = {
    "type": "Point",
    "coordinates": [rec.longitude, rec.latitude],
  }

  if (rec.elevation) {
    rec.location.coordinates.push(rec.elevation)
  }

  geonamesFields.forEach(key => delete rec[key])

  return rec
}
 
