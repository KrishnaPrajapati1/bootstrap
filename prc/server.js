const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/coaching_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define routes
const studentRoutes = require('./routes/student');
app.use('/api/students', studentRoutes);

// Listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));