const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../models/User'); // Assuming User model is in the models folder
const router = express.Router();

// Route to create a new user
router.post('/', async (req, res) => {
  const { Email, password, authLevel } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ Email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = new User({
      Email,
      password,
      authLevel
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
