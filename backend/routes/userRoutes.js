const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Route for registering a user
router.post("/", registerUser);

// Route for authenticating a user
router.post("/login", authUser);

// Route for fetching all users (protected)
router.get("/", protect, allUsers);

module.exports = router;
