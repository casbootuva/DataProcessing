import csv
import json 

with open("INTdata.csv","rb") as r:
    r = r.readlines()[5:]

with open('INTdata.json', 'w') as fp:
    INTdict = {}
    for line in r:
        splitted = line.split(',')
        countryName = splitted[1][1:-1]   
        intusers2009 = splitted[53][1:-1]
        intusers2010 = splitted[54][1:-1]
        intusers2011 = splitted[55][1:-1]
        intusers2012 = splitted[56][1:-1]
        intusers2013 = splitted[57][1:-1]
        intUsers2014 = splitted[58][1:-1] 
        INTdict[countryName] = [intusers2009,intusers2010,intusers2011,intusers2012,intusers2013,intUsers2014]
    print INTdict
    json.dump(INTdict, fp)
    print type(intusers2013)

    

	# JSONlist=[]
	# # set replace 3 letter country code to two letter country code and convert to JSON.
	# for line in r:
	# 	splitted = line.split(',')
	# 	countryName = splitted[0]
	# 	for i in range (len(country_codes)):
	# 		if countryName == country_codes[i][1]:
	# 			countryName = country_codes[i][0]
	# 	intUsers = splitted[1][:-2]
	# 	JSONlist.append([countryName,intUsers])
	# json.dump(JSONlist, f)

