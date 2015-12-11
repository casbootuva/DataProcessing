import csv
import json 

with open("GDPdata.csv","rb") as r:
    r = r.readlines()[5:]

with open('GDPdata.json', 'w') as fp:
    GDPdict = {}
    for line in r:
        splitted = line.split(',')
        countryName = splitted[1][1:-1]   
        GDPUsers = splitted[58][1:-1] 
        GDPdict[countryName] = GDPUsers
    print GDPdict
    json.dump(GDPdict, fp)


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

