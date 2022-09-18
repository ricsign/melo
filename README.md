## Contributors
Linda, Ozayr, Richard, Rohan

## Inspiration
As music lovers, we often search music pieces online for a variety of purposes; however, one may not always remember the piece name despite being able to hum the tune or fundamental chord of a song. This inspired us to create Me♪o (pronounced “melo” in melody), a web app that acts as a search engine specifically for musical pieces. 

## What it does
Melo is a music search engine designed to help musicians find the musical pieces that they are looking for. Songs can be searched in a traditional manner by name, artist, categories, etc.; however, a feature unique to Melo is that songs can be searched by a subset of notes that appear in them. In other words, users can enter notes in both staff and numbered musical notation to find songs in which the group of notes appear. 

## How we built it
We created our project with React and had two main pages (different routes). The first page (Home) contains the title and a search box which receives the data from the user and returns the musical pieces that have matching results. To get this info, we needed a database. Originally, we planned to use CockroachDB, but ended up using a JSON file as our backend since we were running out of time. The second page is a user guide to our webapp with a link to our GitHub repository, if the users choose to view the source code.

## Challenges we ran into
- Getting CockroachDB to work with React (this took a significant amount of our time)
- Getting the backend to deploy (JSON file)
- Miscommunication between teammates 
- Waking up + working while sleep deprived
- We had too much fun :D

## Accomplishments that we're proud of
- Coded a full web app
- Used a server for backend
- We did ittt

## What we learned
We learned how to do API calls with React’s fetch functions. We learned to retrieve JSON data and convert it to readable and quantifiable results. 

## What's next for Me♪o 
- Incorporate a SQL database
- Convert sounds into notes and search database for similar songs/musical pieces
- Improve UI
- Personalized output based on user data (ie location)
- Add additional features: filters, sharing

