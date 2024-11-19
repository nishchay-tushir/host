const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { Email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ Email });
        console.log('User found:', user);
        if (!user) {
            return res.status(401).json({ message: 'Incorrect Login Credentials!' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect Login Credentials!' });
        }

        // Create token
        const token = jwt.sign({ Email: user.Email, authLevel: user.authLevel }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            dashboardUrl: `/${user.authLevel}/dashboard`,
            name: user.Email,
            token
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'An Error Occurred During Login!' });
    }
});

module.exports = router;
