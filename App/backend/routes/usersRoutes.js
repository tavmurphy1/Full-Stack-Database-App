const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);

module.exports = router;
