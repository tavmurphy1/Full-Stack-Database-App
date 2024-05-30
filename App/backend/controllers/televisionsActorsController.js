// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of movie actors in movie actors
const getTelevisionsActors = async (req, res) => {
  try {
    // Select all rows from the "Movies Actors" table
    const query = "SELECT television_actor_id, Actors.actor_name as actor, Televisions.television_title as television FROM Televisions_Actors INNER JOIN Televisions ON television_id_ta = Televisions.television_id INNER JOIN Actors ON actor_id_ta = Actors.actor_id;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching television actors from the database:", error);
    res.status(500).json({ error: "Error fetching television actors" });
  }
};

// Export the functions as methods of an object
module.exports = {
  getTelevisionsActors
};
