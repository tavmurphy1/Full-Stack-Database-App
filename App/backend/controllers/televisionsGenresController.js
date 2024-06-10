//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names, comments, and my SQL queries to match our project's mySQL Movies_Genres table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of movie genres in movie genres
const getTelevisionsGenres = async (req, res) => {
  try {
    // Select all rows from the "Movies Genres" table
    const query = "SELECT television_genre_id, Genres.genre_name as genre, Televisions.television_title as television FROM Televisions_Genres INNER JOIN Televisions ON television_id_tg = Televisions.television_id INNER JOIN Genres ON genre_id_tg = Genres.genre_id;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching television genres from the database:", error);
    res.status(500).json({ error: "Error fetching television genres" });
  }
};

// Export the functions as methods of an object
module.exports = {
  getTelevisionsGenres
};
