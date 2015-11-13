# KNMIinput = open(, "r")
# KNMIoutput = open("C:\Users\Cas\Dropbox\MinorProgrammeren\DataProcessing\DataProcessing\Homework\problemset3\KNMIoutput.txt", "w")

import csv

with open("C:\Users\Cas\Dropbox\MinorProgrammeren\DataProcessing\DataProcessing\Homework\problemset3\KNMIdata.txt","rb") as r:

    r = r.readlines()[12:]
with open("C:\Users\Cas\Dropbox\MinorProgrammeren\DataProcessing\DataProcessing\Homework\problemset3\KNMIoutput.csv","wb") as f:
    writer= csv.writer( f )

    for line in r:
    	splitted = line.split(',')
    	date = splitted[1][:4] + '/' + splitted[1][4:6] + '/' + splitted[1][6:8] 
        temperature = splitted[2].strip()
        writer.writerow([date, temperature])
