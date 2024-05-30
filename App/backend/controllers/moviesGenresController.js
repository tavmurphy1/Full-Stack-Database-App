// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of movie genres in movie genres
const getMoviesGenres = async (req, res) => {
  try {
    // Select all rows from the "Movies Genres" table
    const query = "SELECT movie_genre_id, Genres.genre_name as genre, Movies.movie_title as movie FROM Movies_Genres INNER JOIN Movies ON movie_id_mg = Movies.movie_id INNER JOIN Genres ON genre_id_mg = Genres.genre_id;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching movie genres from the database:", error);
    res.status(500).json({ error: "Error fetching movie genres" });
  }
};

// Export the functions as methods of an object
module.exports = {
  getMoviesGenres
};
