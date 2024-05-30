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





// Add your Connect DB Activitiy Code Below:
// ...


// ...
// End Connect DB Activity Code.


app.listen(PORT, () => {
  // Change this text to whatever FLIP server you're on
  console.log(`Server running:  http://classwork.engr.oregonstate.edu:${PORT}...`);
});
