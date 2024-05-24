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
