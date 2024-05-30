// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of movie directors in movie directors
const getTelevisionsDirectors = async (req, res) => {
  try {
    // Select all rows from the "Movies Directors" table
    const query = "SELECT television_director_id, Directors.director_name as director, Televisions.television_title as television FROM Televisions_Directors INNER JOIN Televisions ON television_id_td = Televisions.television_id INNER JOIN Directors ON director_id_td = Directors.director_id;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching television directors from the database:", error);
    res.status(500).json({ error: "Error fetching television directors" });
  }
};

// Export the functions as methods of an object
module.exports = {
  getTelevisionsDirectors
};
