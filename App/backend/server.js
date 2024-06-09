const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Match to your database config route
const db = require('./database/config.js');

const app = express();
const PORT = process.env.PORT || 8505;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (FLIP/classwork) http://flip3.engr.oregonstate.edu:5173
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
  // Change this text to whatever FLIP server you're on
  console.log(`Server running:  http://classwork.engr.oregonstate.edu:${PORT}...`);
});
