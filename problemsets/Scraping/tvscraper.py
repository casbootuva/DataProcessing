#!/usr/bin/env python
# Name:
# Student number:
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''

    #print dom.body.content
    genrestring ="" #empty string that will contain genre of tv show.
    actorstring ="" #empty string that will contain actors in tv show.
    tvlist = [] # list that will contain information about all tv shows.
    row = [] # list that will contain information about individual tv shows.

    for e in dom.by_tag("tr.detailed")[:50]: # tr. detailed contains all information about the show
        row = []
        genrestring = "" # empty string
        actorstring = "" # empty string
        for a in e.by_tag("td.title"): # td title contains title, genre and actors.
            for j in a.by_tag("a")[: 1]: # refers to title.
                row.append(str(j[0]))
            for b in e.by_tag("td.number")[:1]: # refers to rank
                row.append(str(b[0]))
            for c in a.by_tag("span.genre"): # refers to span that contains genre.
                for h in c.by_tag("a"):  # refers to entries in genre span.  
                    genrestring += str(h[0]) # adds the genre to genre list
                    genrestring += ", " #adds a comma and space in between the genre
                genrestring = genrestring[: -2] # makes sure last comma and space are deleted
                row.append(genrestring) # append genre to row string.
            for l in a.by_tag("span.credit"): # refers to the span that contains the actors
                for m in l.by_tag("a"):   # refers to entries within credit span. 
                    actorstring += str(m[0]) # adds actors to string.
                    actorstring += ", "   # adds a comma and space in between.
                actorstring = actorstring[: -2] # chopps off lost comma and space.
                row.append(actorstring) # append actors to row list.
        tvlist.append(row) # append individual movie list to list containing information about all movies.
    return tvlist        

    # ADD YOUR CODE HERE TO EXTRACT THE ABOVE INFORMATION ABOUT THE
    # HIGHEST RANKING TV-SERIES
    # NOTE: FOR THIS EXERCISE YOU ARE ALLOWED (BUT NOT REQUIRED) TO IGNORE
    # UNICODE CHARACTERS AND SIMPLY LEAVE THEM OUT OF THE OUTPUT.


def save_csv(f, tvlist):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for row in tvlist: # write to csv file
        writer.writerow(row)

    

    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)