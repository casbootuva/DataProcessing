import csv
import json

csvfile = open('C:\Users\Cas\Dropbox\MinorProgrammeren\DataProcessing\DataProcessing\Homework\problemset3\KNMIoutput.csv', 'r')
jsonfile = open('C:\Users\Cas\Dropbox\MinorProgrammeren\DataProcessing\DataProcessing\Homework\problemset4\JSONoutput.json', 'w')

JSONlist = []
fieldnames = ("Date","Temperature")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    JSONlist.append(json.dump(row, jsonfile))
   	