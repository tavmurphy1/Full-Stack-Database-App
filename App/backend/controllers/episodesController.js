//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names, comments, and my SQL queries to match our project's mySQL Episodes table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of episodes in episodes
const getEpisodes = async (req, res) => {
  try {
    // Select all rows from the "Episodes" table
    const query = "SELECT episode_id, episode_title, episode_length, Televisions.television_title AS television_name FROM Episodes INNER JOIN Televisions ON television_id_ep = Televisions.television_id;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching episodes from the database:", error);
    res.status(500).json({ error: "Error fetching episodes" });
  }
};

// define a new GET request with express:
const getTVShows = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT television_id, television_title FROM Televisions;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching tv shows from the database:", error);
    res.status(500).json({ error: "Error fetching tv shows" });
  }
};

// Returns status of creation of new episode
const createEpisode = async (req, res) => {
  try {
    const { episode_title, episode_length, television_id_ep } = req.body;
    const query =
      "INSERT INTO Episodes (episode_title, episode_length, television_id_ep) VALUES (?, ?, ?)";

    const response = await db.query(query, [
      episode_title,
      episode_length === "" ? null: parseInt(episode_length),
      television_id_ep === "" ? null : parseInt(television_id_ep)
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating episode:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating episode" });
  }
};

// Endpoint to delete a episode from the database
const deleteEpisode = async (req, res) => {
  console.log("Deleting episode with id:", req.params.id);
  const episodeID = req.params.id;

  try {
    // Ensure the episode exists
    const [isExisting] = await db.query(
      "SELECT 1 FROM Episodes WHERE episode_id = ?",
      [episodeID]
    );

    // If the episode doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Episode not found");
    }

    // Delete the episode from Episodes
    await db.query("DELETE FROM Episodes WHERE episode_id = ?", [episodeID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Episode deleted successfully" })
  } catch (error) {
    console.error("Error deleting episode from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getEpisodes,
  getTVShows,
  createEpisode,
  deleteEpisode,
};
