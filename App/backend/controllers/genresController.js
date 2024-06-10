//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names, comments, and my SQL queries to match our project's mySQL Genres table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of genres in genres
const getGenres = async (req, res) => {
  try {
    // Select all rows from the "Genres" table
    const query = "SELECT genre_id, genre_name FROM `Genres`;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching genres from the database:", error);
    res.status(500).json({ error: "Error fetching genres" });
  }
};

// Returns status of creation of new genre
const createGenre = async (req, res) => {
  try {
    const { genre_name } = req.body;
    const query =
      "INSERT INTO Genres (genre_name) VALUES (?)";

    const response = await db.query(query, [
      genre_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating genre:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating genre" });
  }
};

// Endpoint to delete a genre from the database
const deleteGenre = async (req, res) => {
  console.log("Deleting genre with id:", req.params.id);
  const genreID = req.params.id;

  try {
    // Ensure the genre exists
    const [isExisting] = await db.query(
      "SELECT 1 FROM Genres WHERE genre_id = ?",
      [genreID]
    );

    // If the genre doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Genre not found");
    }

    // Delete the genre from Genres
    await db.query("DELETE FROM Genres WHERE genre_id = ?", [genreID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Genre deleted successfully" })
  } catch (error) {
    console.error("Error deleting genre from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getGenres,
  createGenre,
  deleteGenre,
};
