// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of tv shows in televisions
const getTelevisions = async (req, res) => {
  try {
    // Select all rows from the "Televisions" table
    const query = "SELECT * FROM Televisions";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching tv shows from the database:", error);
    res.status(500).json({ error: "Error fetching tv shows" });
  }
};

// define a new GET request with express:
const getTelevisionsGenres = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT  Genres.genre_name AS `genres`, Televisions_Genres.television_id_tg AS `televisionID` FROM Televisions_Genres INNER JOIN Genres ON Genres.genre_id = Televisions_Genres.genre_id_tg INNER JOIN Televisions ON Televisions.television_id = Televisions_Genres.television_id_tg Order by Televisions.television_id;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching television genres from the database:", error);
    res.status(500).json({ error: "Error fetching television genres" });
  }
};

// define a new GET request with express:
const getTelevisionsActors = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT  Actors.actor_name AS `actors`, Televisions_Actors.television_id_ta AS `televisionID` FROM Televisions_Actors INNER JOIN Actors ON Actors.actor_id = Televisions_Actors.actor_id_ta INNER JOIN Televisions ON Televisions.television_id = Televisions_Actors.television_id_ta Order by Televisions.television_id;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching television actors from the database:", error);
    res.status(500).json({ error: "Error fetching television actors" });
  }
};

// define a new GET request with express:
const getTelevisionsDirectors = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT  Directors.director_name AS `directors`, Televisions_Directors.television_id_td AS `televisionID` FROM Televisions_Directors INNER JOIN Directors ON Directors.director_id = Televisions_Directors.director_id_td INNER JOIN Televisions ON Televisions.television_id = Televisions_Directors.television_id_td Order by Televisions.television_id;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching television directors from the database:", error);
    res.status(500).json({ error: "Error fetching television directors" });
  }
};


// Returns a single tv show by its unique ID from Televisions
const getTelevisionByID = async (req, res) => {
  try {
    const televisionID = req.params.id;
    const query = "SELECT * FROM Televisions WHERE television_id = ?";
    const [result] = await db.query(query, [televisionID]);
    // Check if tv show was found
    if (result.length === 0) {
      return res.status(404).json({ error: "TV show not found" });
    }
    const television = result[0];
    res.json(television);
  } catch (error) {
    console.error("Error fetching tv show from the database:", error);
    res.status(500).json({ error: "Error fetching tv show" });
  }
};

// define a new GET request with express:
const getGenres = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT genre_id, genre_name FROM `Genres`;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching genres from the database:", error);
    res.status(500).json({ error: "Error fetching genres" });
  }
};

// define a new GET request with express:
const getActors = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT actor_id, actor_name FROM `Actors`;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching actors from the database:", error);
    res.status(500).json({ error: "Error fetching actors" });
  }
};

// define a new GET request with express:
const getDirectors = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT director_id, director_name FROM `Directors`;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching directors from the database:", error);
    res.status(500).json({ error: "Error fetching directors" });
  }
};

// Returns status of creation of new person in bsg_movies
const createTelevision = async (req, res) => {
  try {
    const { television_title, television_total_view } = req.body;
    const query =
      "INSERT INTO Televisions (television_title, television_total_view) VALUES (?, ?)";

    const response = await db.query(query, [
      television_title,
      television_total_view === "" ? null : parseInt(television_total_view)
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating tv show:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating tv show" });
  }
};

// Returns status of creation of new person in bsg_movies
const createTelevisionGenre = async (req, res) => {
  try {
    const { television_title, genre_name } = req.body;
    const query =
      "INSERT INTO Televisions_Genres (television_id_tg, genre_id_tg) VALUES ((SELECT television_id FROM Televisions WHERE television_title = ?), (SELECT genre_id FROM Genres WHERE genre_name = ?))";

    const response = await db.query(query, [
      television_title,
      genre_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating television genre:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating television genre" });
  }
};

// Returns status of creation of new person in bsg_movies
const createTelevisionActor = async (req, res) => {
  try {
    const { television_title, actor_name } = req.body;
    const query =
      "INSERT INTO Televisions_Actors (television_id_ta, actor_id_ta) VALUES ((SELECT television_id FROM Televisions WHERE television_title = ?), (SELECT actor_id FROM Actors WHERE actor_name = ?))";

    const response = await db.query(query, [
      television_title,
      actor_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating television actor:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating television actor" });
  }
};

// Returns status of creation of new person in bsg_movies
const createTelevisionDirector = async (req, res) => {
  try {
    const { television_title, director_name } = req.body;
    const query =
      "INSERT INTO Televisions_Directors (television_id_td, director_id_td) VALUES ((SELECT television_id FROM Televisions WHERE television_title = ?), (SELECT director_id FROM Directors WHERE director_name = ?))";

    const response = await db.query(query, [
      television_title,
      director_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating television director:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating television director" });
  }
};


const updateTelevision = async (req, res) => {
  // Get the person ID
  const televisionID = req.params.id;
  // Get the person object
  const newTelevision = req.body;

  try {
    const [data] = await db.query("SELECT * FROM Televisions WHERE television_id = ?", [
      televisionID,
    ]);

    const oldTelevision = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newTelevision, oldTelevision)) {
      const query =
        "UPDATE Televisions SET television_title=?, television_total_view=? WHERE television_id=?";

      const values = [
        newTelevision.television_title,
        newTelevision.television_total_view,
        televisionID
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "TV show updated successfully." });
    }

    res.json({ message: "TV show details are the same, no update" });
  } catch (error) {
    console.log("Error updating tv show", error);
    res
      .status(500)
      .json({ error: `Error updating the tv show with id ${televisionID}` });
  }
};

// Endpoint to delete a customer from the database
const deleteTelevision = async (req, res) => {
  console.log("Deleting tv show with id:", req.params.id);
  const televisionID = req.params.id;

  try {
    // Ensure the person exitst
    const [isExisting] = await db.query(
      "SELECT 1 FROM Televisions WHERE television_id = ?",
      [televisionID]
    );

    // If the person doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("TV show not found");
    }

    // Delete related records from the intersection table (see FK contraints bsg_cert_movies)
    const [response1] = await db.query(
      "DELETE FROM Televisions_Actors WHERE television_id_ta = ?",
      [televisionID]
    );

    console.log(
      "Deleted",
      response1.affectedRows,
      "rows from Televisions_Actors intersection table"
    );

    const [response2] = await db.query(
      "DELETE FROM Televisions_Directors WHERE television_id_td = ?",
      [televisionID]
    );

    console.log(
      "Deleted",
      response2.affectedRows,
      "rows from Televisions_Directors intersection table"
    );

    const [response3] = await db.query(
      "DELETE FROM Televisions_Genres WHERE television_id_tg = ?",
      [televisionID]
    );

    console.log(
      "Deleted",
      response3.affectedRows,
      "rows from Televisions_Genres intersection table"
    );

    // Delete the movie from Movies
    await db.query("DELETE FROM Televisions WHERE television_id = ?", [televisionID]);

    // Return the appropriate status code
    res.status(204).json({ message: "TV show deleted successfully" })
  } catch (error) {
    console.error("Error deleting tv show from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getTelevisions,
  getTelevisionByID,
  createTelevision,
  createTelevisionGenre,
  createTelevisionActor,
  createTelevisionDirector,
  updateTelevision,
  deleteTelevision,
  getTelevisionsGenres,
  getTelevisionsActors,
  getTelevisionsDirectors,
  getGenres,
  getActors,
  getDirectors,
};
