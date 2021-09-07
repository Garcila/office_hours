# EXPRESS

Why are we using Express?

## Express Setup**

- Initialize the application to have a package.json
  - Why?
- install Express
- Create a file .js that will contain Express
- Setup the Express application
  - require express
  - const app to invoke the express app
  - setup a port as a const
  - Add a event listener part of express to start and listen to a port
  - Nodemon install and include start on package.json
  - app.use url encoded app.use(express.urlencoded({ extended: true }));
  - use json app.use(express.json());

## Data

- require the data that we manipulated
- Create and export a file that contains the data
  - convert [csv to json](https://csvjson.com/csv2json)
  - Use [source data](https://docs.google.com/spreadsheets/d/1rwri7etNBMhjCqQ1mjyTgRLOjGWfAKINi2apDDtlbTE/edit#gid=0)

## Routes

- get route '/' to show the home page with a simple .send
- get route to /api/allFruits to provide json data
- get route to /api/allFruits/:fruit to get the parameter and look in the data and show it
  - const chosen = req.params.character;
- post route to /api/allstuff accepting json data and add it to the array

## use HTML

- require path
- in the routes use res.sendFile(path.join(__dirname, 'index.html'));
  - in the index.html do what we have done so far and fetch the information from the api to populate the page
  - app.use(express.static('public')); to serve from public
