//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names, comments, and my SQL queries to match our project's mySQL Televisions table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

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
    const query = "SELECT Televisions.television_id, television_title, COALESCE((SELECT sum(Engagements.view) FROM Engagements WHERE Engagements.television_id = Televisions.television_id), 0) AS 'television_total_view' FROM Televisions";
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
    // Select all rows from the "Televisions_Genres" table
    const query = 'SELECT  Televisions_Genres.television_genre_id, Genres.genre_name AS `genres`, Televisions_Genres.television_id_tg AS `televisionID` FROM Televisions_Genres INNER JOIN Genres ON Genres.genre_id = Televisions_Genres.genre_id_tg INNER JOIN Televisions ON Televisions.television_id = Televisions_Genres.television_id_tg Order by Televisions.television_id;';
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
    // Select all rows from the "Televisions_Actors" table
    const query = 'SELECT  Televisions_Actors.television_actor_id, Televisions_Actors.television_actor_id, Actors.actor_name AS `actors`, Televisions_Actors.television_id_ta AS `televisionID` FROM Televisions_Actors INNER JOIN Actors ON Actors.actor_id = Televisions_Actors.actor_id_ta INNER JOIN Televisions ON Televisions.television_id = Televisions_Actors.television_id_ta Order by Televisions.television_id;';
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
    // Select all rows from the "Televisions_Directors" table
    const query = 'SELECT  Televisions_Directors.television_director_id, Directors.director_name AS `directors`, Televisions_Directors.television_id_td AS `televisionID` FROM Televisions_Directors INNER JOIN Directors ON Directors.director_id = Televisions_Directors.director_id_td INNER JOIN Televisions ON Televisions.television_id = Televisions_Directors.television_id_td Order by Televisions.television_id;';
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
    const { television_title } = req.body;
    const query =
      "INSERT INTO Televisions (television_title) VALUES (?)";

    const response = await db.query(query, [
      television_title
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
    const { genre_name } = req.body;
    const query =
      "INSERT INTO Televisions_Genres (television_id_tg, genre_id_tg) VALUES ((SELECT max(television_id) FROM Televisions), (SELECT genre_id FROM Genres WHERE genre_name = ?))";

    const response = await db.query(query, [
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
    const { actor_name } = req.body;
    const query =
      "INSERT INTO Televisions_Actors (television_id_ta, actor_id_ta) VALUES ((SELECT max(television_id) FROM Televisions), (SELECT actor_id FROM Actors WHERE actor_name = ?))";

    const response = await db.query(query, [
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
    const { director_name } = req.body;
    const query =
      "INSERT INTO Televisions_Directors (television_id_td, director_id_td) VALUES ((SELECT max(television_id) FROM Televisions), (SELECT director_id FROM Directors WHERE director_name = ?))";

    const response = await db.query(query, [
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
  // Get the television ID
  const televisionID = req.params.id;
  // Get the television object
  const newTelevision = req.body;

  try {
    const [data] = await db.query("SELECT * FROM Televisions WHERE television_id = ?", [
      televisionID,
    ]);

    const oldTelevision = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newTelevision, oldTelevision)) {
      const query =
        "UPDATE Televisions SET television_title=? WHERE television_id=?";

      const values = [
        newTelevision.television_title,
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

const updateTelevisionGenre = async (req, res) => {
  // Get the television genre ID
  const televisionGenreID = req.params.id;
  // Get the television genre object
  const newTelevisionGenre1 = req.body;
  const newTelevisionGenre2 = {television_genre_id: parseInt(televisionGenreID), television_id_tg: newTelevisionGenre1.television_id_tg, genre_id_tg: newTelevisionGenre1.genre_id_tg};

  try {
    const [data] = await db.query("SELECT * FROM Televisions_Genres WHERE television_genre_id = ?", [
      televisionGenreID,
    ]);

    const oldTelevisionGenre = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newTelevisionGenre2, oldTelevisionGenre)) {
      const query =
        "UPDATE Televisions_Genres SET television_id_tg=?, genre_id_tg=? WHERE television_genre_id=?";

      const values = [
        newTelevisionGenre2.television_id_tg,
        newTelevisionGenre2.genre_id_tg,
        televisionGenreID
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Television Genres updated successfully." });
    }

    res.json({ message: "Television Genre details are the same, no update" });
  } catch (error) {
    console.log("Error updating television genre", error);
    res
      .status(500)
      .json({ error: `Error updating the television genre with id ${televisionGenreID}` });
  }
};

const updateTelevisionActor = async (req, res) => {
  // Get the television actor ID
  const televisionActorID = req.params.id;
  // Get the television actor object
  const newTelevisionActor1 = req.body;
  const newTelevisionActor2 = {television_actor_id: parseInt(televisionActorID), television_id_ta: newTelevisionActor1.television_id_ta, actor_id_ta: newTelevisionActor1.actor_id_ta};

  try {
    const [data] = await db.query("SELECT * FROM Televisions_Actors WHERE television_actor_id = ?", [
      televisionActorID,
    ]);

    const oldTelevisionActor = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newTelevisionActor2, oldTelevisionActor)) {
      const query =
        "UPDATE Televisions_Actors SET television_id_ta=?, actor_id_ta=? WHERE television_actor_id=?";

      const values = [
        newTelevisionActor2.television_id_ta,
        newTelevisionActor2.actor_id_ta,
        televisionActorID
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Television Actors updated successfully." });
    }

    res.json({ message: "Television Actor details are the same, no update" });
  } catch (error) {
    console.log("Error updating television actor", error);
    res
      .status(500)
      .json({ error: `Error updating the television actor with id ${televisionActorID}` });
  }
};

const updateTelevisionDirector = async (req, res) => {
  // Get the television director ID
  const televisionDirectorID = req.params.id;
  // Get the television director object
  const newTelevisionDirector1 = req.body;
  const newTelevisionDirector2 = {television_director_id: parseInt(televisionDirectorID), television_id_td: newTelevisionDirector1.television_id_td, director_id_td: newTelevisionDirector1.director_id_td};

  try {
    const [data] = await db.query("SELECT * FROM Televisions_Directors WHERE television_director_id = ?", [
      televisionDirectorID,
    ]);

    const oldTelevisionDirector = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newTelevisionDirector2, oldTelevisionDirector)) {
      const query =
        "UPDATE Televisions_Directors SET television_id_td=?, director_id_td=? WHERE television_director_id=?";

      const values = [
        newTelevisionDirector2.television_id_td,
        newTelevisionDirector2.director_id_td,
        televisionDirectorID
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Television Directors updated successfully." });
    }

    res.json({ message: "Television Director details are the same, no update" });
  } catch (error) {
    console.log("Error updating television director", error);
    res
      .status(500)
      .json({ error: `Error updating the television director with id ${televisionDirectorID}` });
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
  updateTelevisionGenre,
  updateTelevisionActor,
  updateTelevisionDirector,
  deleteTelevision,
  getTelevisionsGenres,
  getTelevisionsActors,
  getTelevisionsDirectors,
  getGenres,
  getActors,
  getDirectors,
};
