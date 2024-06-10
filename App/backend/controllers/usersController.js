//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names, comments, and my SQL queries to match our project's mySQL Users table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of users in users
const getUsers = async (req, res) => {
  try {
    // Select all rows from the "Users" table
    const query = "SELECT user_id, user_name, user_email, user_country FROM `Users`;";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching users from the database:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

// Returns status of creation of new user
const createUser = async (req, res) => {
  try {
    const { user_name, user_email, user_country } = req.body;
    const query =
      "INSERT INTO Users (user_name, user_email, user_country) VALUES (?, ?, ?)";

    const response = await db.query(query, [
      user_name,
      user_email,
      user_country
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating user:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating user" });
  }
};

// Endpoint to delete a user from the database
const deleteUser = async (req, res) => {
  console.log("Deleting user with id:", req.params.id);
  const userID = req.params.id;

  try {
    // Ensure the user exists
    const [isExisting] = await db.query(
      "SELECT 1 FROM Users WHERE user_id = ?",
      [userID]
    );

    // If the user doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("User not found");
    }

    // Delete the user from Users
    await db.query("DELETE FROM Users WHERE user_id = ?", [userID]);

    // Return the appropriate status code
    res.status(204).json({ message: "User deleted successfully" })
  } catch (error) {
    console.error("Error deleting user from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getUsers,
  createUser,
  deleteUser,
};
