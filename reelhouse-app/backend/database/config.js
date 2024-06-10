//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing values to access our database. Data cleaned of username and password used during development.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

// Get an instance of mysql we can use in the app
const mysql = require("mysql2");
require("dotenv").config();

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
  connectionLimit: 10,
  waitForConnections: true,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "8951",
  database: process.env.DB_DATABASE || "cs340_murphtav",
}).promise();

// Export it for use in our application
module.exports = pool;
