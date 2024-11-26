const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Add a new student
router.post('/add', async(req, res) => {
    const { name, email } = req.body;
    try {
        const newStudent = new Student({ name, email });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all students
router.get('/all', async(req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;