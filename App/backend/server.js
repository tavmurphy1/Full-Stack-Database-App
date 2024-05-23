const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Match to your database config route
const db = require('./database/config.js');

const app = express();
const PORT = process.env.PORT || 8505;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (FLIP/classwork) http://flip3.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
app.use("/api/people", require("./routes/peopleRoutes"));

// define a new GET request with express:
app.get('/api/movies', async (req, res) => {
  try {
    // Await your database queries here

    // IMPLEMENT WHEN ENGAGEMENTS WORKING 
    //const [results] = await db.pool.query('SELECT Movies.movie_id, movie_title, movie_length, sum(Engagements.view) FROM Movies INNER JOIN Engagements ON Engagements.movie_id = Movies.movie_id group by Movies.movie_id Order by Movies.movie_id;');
    const [results] = await db.pool.query('SELECT * FROM Movies;');

    // res.json() automatically stringifies the JavaScript object to JSON
    res.json(results);

  } catch (error) {
    // Handle Errors
    console.error('Database operation failed:', error);
    res.status(500).send('Server error');
  }
});

// define a new GET request with express:
app.get('/api/movies/genres', async (req, res) => {
  try {

    const [results] = await db.pool.query(
      'SELECT  Genres.genre_name AS `genres`, Movies_Genres.movie_id_mg AS `movieID` FROM Movies_Genres INNER JOIN Genres ON Genres.genre_id = Movies_Genres.genre_id_mg INNER JOIN Movies ON Movies.movie_id = Movies_Genres.movie_id_mg Order by Movies.movie_id;');

    // res.json() automatically stringifies the JavaScript object to JSON
    res.json(results);

  } catch (error) {
    // Handle Errors
    console.error('Database operation failed:', error);
    res.status(500).send('Server error');
  }
});

// define a new GET request with express:
app.get('/api/movies/actors', async (req, res) => {
  try {

    const [results] = await db.pool.query(
      'SELECT  Actors.actor_name AS `actors`, Movies_Actors.movie_id_ma AS `movieID` FROM Movies_Actors INNER JOIN Actors ON Actors.actor_id = Movies_Actors.actor_id_ma INNER JOIN Movies ON Movies.movie_id = Movies_Actors.movie_id_ma Order by Movies.movie_id;');

    // res.json() automatically stringifies the JavaScript object to JSON
    res.json(results);

  } catch (error) {
    // Handle Errors
    console.error('Database operation failed:', error);
    res.status(500).send('Server error');
  }
});

// define a new GET request with express:
app.get('/api/movies/directors', async (req, res) => {
  try {

    const [results] = await db.pool.query(
      'SELECT  Directors.director_name AS `directors`, Movies_Directors.movie_id_md AS `movieID` FROM Movies_Directors INNER JOIN Directors ON Directors.director_id = Movies_Directors.director_id_md INNER JOIN Movies ON Movies.movie_id = Movies_Directors.movie_id_md Order by Movies.movie_id;');

    // res.json() automatically stringifies the JavaScript object to JSON
    res.json(results);

  } catch (error) {
    // Handle Errors
    console.error('Database operation failed:', error);
    res.status(500).send('Server error');
  }
});




// Add your Connect DB Activitiy Code Below:
// ...


// ...
// End Connect DB Activity Code.


app.listen(PORT, () => {
  // Change this text to whatever FLIP server you're on
  console.log(`Server running:  http://classwork.engr.oregonstate.edu:${PORT}...`);
});
