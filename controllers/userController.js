const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// Sign up logic
exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        res.status(201).json({ message: 'User created successfully.', user_id: newUser._id });
    } catch (error) {
        res.status(400).json({ status: false, message: 'Error creating user.' });
    }
};

// Login logic
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ status: false, message: 'Invalid Username and password' });
        }
        res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
        res.status(500).json({ status: false, message: 'Server error.' });
    }
};
