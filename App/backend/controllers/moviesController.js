// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of movies in movies
const getMovies = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = "SELECT * FROM Movies";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching movies from the database:", error);
    res.status(500).json({ error: "Error fetching movies" });
  }
};

// define a new GET request with express:
const getMoviesGenres = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT  Movies_Genres.movie_genre_id, Genres.genre_name AS `genres`, Movies_Genres.movie_id_mg AS `movieID` FROM Movies_Genres INNER JOIN Genres ON Genres.genre_id = Movies_Genres.genre_id_mg INNER JOIN Movies ON Movies.movie_id = Movies_Genres.movie_id_mg Order by Movies.movie_id;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching movie genres from the database:", error);
    res.status(500).json({ error: "Error fetching movies genres" });
  }
};

// define a new GET request with express:
const getMoviesActors = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT  Movies_Actors.movie_actor_id, Actors.actor_name AS `actors`, Movies_Actors.movie_id_ma AS `movieID` FROM Movies_Actors INNER JOIN Actors ON Actors.actor_id = Movies_Actors.actor_id_ma INNER JOIN Movies ON Movies.movie_id = Movies_Actors.movie_id_ma Order by Movies.movie_id;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching movie actors from the database:", error);
    res.status(500).json({ error: "Error fetching movies actors" });
  }
};

// define a new GET request with express:
const getMoviesDirectors = async (req, res) => {
  try {
    // Select all rows from the "Movies" table
    const query = 'SELECT  Movies_Directors.movie_director_id, Directors.director_name AS `directors`, Movies_Directors.movie_id_md AS `movieID` FROM Movies_Directors INNER JOIN Directors ON Directors.director_id = Movies_Directors.director_id_md INNER JOIN Movies ON Movies.movie_id = Movies_Directors.movie_id_md Order by Movies.movie_id;';
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching movie directors from the database:", error);
    res.status(500).json({ error: "Error fetching movies directors" });
  }
};


// Returns a single movie by its unique ID from Movies
const getMovieByID = async (req, res) => {
  try {
    const movieID = req.params.id;
    const query = "SELECT * FROM Movies WHERE movie_id = ?";
    const [result] = await db.query(query, [movieID]);
    // Check if movie was found
    if (result.length === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }
    const movie = result[0];
    res.json(movie);
  } catch (error) {
    console.error("Error fetching movie from the database:", error);
    res.status(500).json({ error: "Error fetching movie" });
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
const createMovie = async (req, res) => {
  try {
    const { movie_title, movie_length, movie_total_view } = req.body;
    const query =
      "INSERT INTO Movies (movie_title, movie_length, movie_total_view) VALUES (?, ?, ?)";

    const response = await db.query(query, [
      movie_title,
      movie_length === "" ? null: parseInt(movie_length),
      movie_total_view === "" ? null : parseInt(movie_total_view)
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating movie:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating movie" });
  }
};

// Returns status of creation of new person in bsg_movies
const createMovieGenre = async (req, res) => {
  try {
    const { genre_name } = req.body;
    const query =
      "INSERT INTO Movies_Genres (movie_id_mg, genre_id_mg) VALUES ((SELECT max(movie_id) FROM Movies), (SELECT genre_id FROM Genres WHERE genre_name = ?))";

    const response = await db.query(query, [
      genre_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating movie genre:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating movie genre" });
  }
};

// Returns status of creation of new person in bsg_movies
const createMovieActor = async (req, res) => {
  try {
    const { actor_name } = req.body;
    const query =
      "INSERT INTO Movies_Actors (movie_id_ma, actor_id_ma) VALUES ((SELECT max(movie_id) FROM Movies), (SELECT actor_id FROM Actors WHERE actor_name = ?))";

    const response = await db.query(query, [
      actor_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating movie actor:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating movie actor" });
  }
};

// Returns status of creation of new person in bsg_movies
const createMovieDirector = async (req, res) => {
  try {
    const { director_name } = req.body;
    const query =
      "INSERT INTO Movies_Directors (movie_id_md, director_id_md) VALUES ((SELECT max(movie_id) FROM Movies), (SELECT director_id FROM Directors WHERE director_name = ?))";

    const response = await db.query(query, [
      director_name
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating movie director:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating movie director" });
  }
};


const updateMovie = async (req, res) => {
  // Get the person ID
  const movieID = req.params.id;
  // Get the person object
  const newMovie = req.body;

  try {
    const [data] = await db.query("SELECT * FROM Movies WHERE movie_id = ?", [
      movieID,
    ]);

    const oldMovie = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newMovie, oldMovie)) {
      const query =
        "UPDATE Movies SET movie_title=?, movie_length=?, movie_total_view=? WHERE movie_id=?";

      const values = [
        newMovie.movie_title,
        newMovie.movie_length,
        newMovie.movie_total_view,
        movieID
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Movie updated successfully." });
    }

    res.json({ message: "Movie details are the same, no update" });
  } catch (error) {
    console.log("Error updating movie", error);
    res
      .status(500)
      .json({ error: `Error updating the movie with id ${movieID}` });
  }
};

const updateMovieGenre = async (req, res) => {
  // Get the person ID
  const movieGenreID = req.params.id;
  // Get the person object
  const newMovieGenre = req.body;

  try {
    const [data] = await db.query("SELECT * FROM Movies_Genres WHERE movie_genre_id = ?", [
      movieGenreID,
    ]);

    const oldMovieGenre = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newMovieGenre, oldMovieGenre)) {
      const query =
        "UPDATE Movies_Genres SET movie_id_mg=?, genre_id_mg=? WHERE movie_genre_id=?";

      const values = [
        newMovieGenre.movie_id_mg,
        newMovieGenre.genre_id_mg,
        movieGenreID
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Movie updated successfully." });
    }

    res.json({ message: "Movie details are the same, no update" });
  } catch (error) {
    console.log("Error updating movie", error);
    res
      .status(500)
      .json({ error: `Error updating the movie with id ${movieID}` });
  }
};

// Endpoint to delete a customer from the database
const deleteMovie = async (req, res) => {
  console.log("Deleting movie with id:", req.params.id);
  const movieID = req.params.id;

  try {
    // Ensure the person exitst
    const [isExisting] = await db.query(
      "SELECT 1 FROM Movies WHERE movie_id = ?",
      [movieID]
    );

    // If the person doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Movie not found");
    }

    // Delete related records from the intersection table (see FK contraints bsg_cert_movies)
    const [response1] = await db.query(
      "DELETE FROM Movies_Actors WHERE movie_id_ma = ?",
      [movieID]
    );

    console.log(
      "Deleted",
      response1.affectedRows,
      "rows from Movies_Actors intersection table"
    );

    const [response2] = await db.query(
      "DELETE FROM Movies_Directors WHERE movie_id_md = ?",
      [movieID]
    );

    console.log(
      "Deleted",
      response2.affectedRows,
      "rows from Movies_Directors intersection table"
    );

    const [response3] = await db.query(
      "DELETE FROM Movies_Genres WHERE movie_id_mg = ?",
      [movieID]
    );

    console.log(
      "Deleted",
      response3.affectedRows,
      "rows from Movies_Genres intersection table"
    );

    // Delete the movie from Movies
    await db.query("DELETE FROM Movies WHERE movie_id = ?", [movieID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Movie deleted successfully" })
  } catch (error) {
    console.error("Error deleting movie from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getMovies,
  getMovieByID,
  createMovie,
  createMovieGenre,
  createMovieActor,
  createMovieDirector,
  updateMovie,
  updateMovieGenre,
  deleteMovie,
  getMoviesGenres,
  getMoviesActors,
  getMoviesDirectors,
  getGenres,
  getActors,
  getDirectors,
};
