//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing routes to match our project's mySQL backend and class server.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Match to your database config route
const db = require('./database/config.js');

const app = express();
const PORT = process.env.PORT || 8505;

// Middleware:

// Uses cors() middleware to allow cross-origin requests from the frontend

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
app.use("/api/movies", require("./routes/moviesRoutes.js"));
app.use("/api/televisions", require("./routes/televisionsRoutes.js"));
app.use("/api/episodes", require("./routes/episodesRoutes.js"));
app.use("/api/users", require("./routes/usersRoutes.js"));
app.use("/api/genres", require("./routes/genresRoutes.js"));
app.use("/api/actors", require("./routes/actorsRoutes.js"));
app.use("/api/directors", require("./routes/directorsRoutes.js"));
app.use("/api/moviegenres", require("./routes/moviesGenresRoutes.js"));
app.use("/api/movieactors", require("./routes/moviesActorsRoutes.js"));
app.use("/api/moviedirectors", require("./routes/moviesDirectorsRoutes.js"));
app.use("/api/televisiongenres", require("./routes/televisionsGenresRoutes.js"));
app.use("/api/televisionactors", require("./routes/televisionsActorsRoutes.js"));
app.use("/api/televisiondirectors", require("./routes/televisionsDirectorsRoutes.js"));
app.use("/api/engagements", require("./routes/engagementsRoutes.js"));

app.listen(PORT, () => {
  console.log(`Server running:  http://classwork.engr.oregonstate.edu:${PORT}...`);
});
