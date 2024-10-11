require('dotenv').config(); // Load environment variables
const connectDB = require('./config/db'); // Import connectDB
const express = require('express');

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(express.json());

// Use Routes
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/emp', require('./routes/empRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
