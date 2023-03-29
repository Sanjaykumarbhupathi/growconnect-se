const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

// User signup endpoint
router.post('/signup',
    async (req, res) => {
        // Check for validation errors
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        
        // Create a new user
        const { email, password, name, mobile, role } = req.body;
        // const hash = await bcrypt.hash(password, 10);
        console.log( email, password, name, mobile, role);
        try {
            const user = new User({ email, password, name, mobile, role });
            await user.save();
            res.json({ message: 'User created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    });

router.post('/login',
    async (req, res) => {
        try {
            const { email, password } = req.body;
            // Check if user exists
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            // Check password
            // const passwordMatch = await bcrypt.compare(password, user.password);
            console.log(password, user.password )
            const passwordMatch = password===user.password;
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            // Create token
            const token = jwt.sign(
                { userId: user._id, email: user.email },
                "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MDA2NzI5NSwiaWF0IjoxNjgwMDY3Mjk1fQ.2rS3b8eA6m31qt-x3HE2rT8meEVna56A9XRvY9vUaNk",
                { expiresIn: '1h' }
            );
            // Return user info and token
            res.json({
                id: user._id,
                name: user.name,
                email: user.email,
                type: user.role,
                token:token
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
  );

  module.exports = router;