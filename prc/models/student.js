const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    enrolledCourses: [{
        type: String,
    }],
});

module.exports = mongoose.model('Student', StudentSchema);