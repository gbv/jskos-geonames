hierachy.zip:
	wget -qN http://download.geonames.org/export/dump/hierarchy.zip

hierarchy.csv: hierarchy.zip
	zcat $< | awk '{print $$1","$$2}' > $@
