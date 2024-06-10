//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names, comments, and my SQL queries to match our project's mySQL Directors table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of directors in directors
const getDirectors = async (req, res) => {
  try {
    // Select all rows from the "Directors" table
    const query = "SELECT director_id, director_name FROM `Directors`;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching directors from the database:", error);
    res.status(500).json({ error: "Error fetching directors" });
  }
};

// Returns status of creation of new director
const createDirector = async (req, res) => {
  try {
    const { director_name } = req.body;
    const query =
      "INSERT INTO Directors (director_name) VALUES (?)";

    const response = await db.query(query, [
      director_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating director:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating director" });
  }
};

// Endpoint to delete a director from the database
const deleteDirector = async (req, res) => {
  console.log("Deleting director with id:", req.params.id);
  const directorID = req.params.id;

  try {
    // Ensure the director exists
    const [isExisting] = await db.query(
      "SELECT 1 FROM Directors WHERE director_id = ?",
      [directorID]
    );

    // If the director doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Director not found");
    }

    // Delete the director from Directors
    await db.query("DELETE FROM Directors WHERE director_id = ?", [directorID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Director deleted successfully" })
  } catch (error) {
    console.error("Error deleting director from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getDirectors,
  createDirector,
  deleteDirector,
};
