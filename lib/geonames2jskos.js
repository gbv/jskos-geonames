const geonamesFields = [
  '_id',
  'name', 'asciiname', 'alternatenames',
  'latitude', 'longitude', 'elevation',
  'country_code', 'cc2',
  
  // TODO: build tree hierarchy from this fields (ancestors)
  'admin1_code', 'admin2_code', 'admin3_code', 'admin4_code',

  'modification_date',
  'timezone',
  'population',

  'feature_class', 'feature_code',

  'dem' // TODO: what about this field?
]

const geonamesUri = id => `http://sws.geonames.org/${id}/`
const geonamesObject = id => {
  return { uri: geonamesUri(id) }
}

function geonames2jskos(rec, hier) {
  const { _id, feature_class, feature_code } = rec

  rec.uri = geonamesUri(_id)
  rec.prefLabel = { en: rec.name }

  // use plain alternamelabels. TODO: use alternatelabels dump instead
  if (rec.alternatenames && rec.alternatenames.length) {
    rec.altLabel = { und: rec.alternatenames }
  }

  rec.modified = rec.modification_date

  rec.location = {
    "type": "Point",
    "coordinates": [rec.longitude, rec.latitude],
  }

  if (rec.elevation) {
    rec.location.coordinates.push(rec.elevation)
  }

  // additional hierarchy
  if (hier) {

    if (hier.broader[_id]) {
      rec.broader = hier.broader[_id].map(geonamesObject)
    }  

    if (hier.narrower[_id]) {
      rec.narrower = hier.narrower[_id].map(geonamesObject)
    }
  }

  let type = ['http://www.w3.org/2004/02/skos/core#Concept']

  if (feature_class) {
    type.push(`http://www.geonames.org/ontology#${feature_class}`)
    if (feature_code) {
      type.push(`http://www.geonames.org/ontology#${feature_class}.${feature_code}`)
    }
  }

  rec.type = type
    
  geonamesFields.forEach(key => delete rec[key])

  return rec
}

module.exports = geonames2jskos
